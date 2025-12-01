"use client"
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/agent-visualizer.tsx
import * as React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function decodeStreamMessage(stream) {
  const decoder = new TextDecoder();
  return decoder.decode(stream);
}
function renderMarkdownToHtml(text) {
  if (!text) return "";
  let processed = text;
  processed = processed.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  processed = processed.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (match, text2, url) => `${text2}: <br/><strong><a href="${url.replace(
      /\s/g,
      ""
    )}" target="_blank" rel="noopener noreferrer" class="chat-link">[${url}]</a></strong>`
  );
  processed = processed.replace(
    /(\d+)\.\s+([^0-9]+?)(?=\s+\d+\.|$)/g,
    (match, num, content) => {
      const trimmedContent = content.trim();
      return `${num}. ${trimmedContent}
`;
    }
  );
  const lines = processed.split(/\n/);
  const formattedLines = lines.map((line) => {
    var _a, _b;
    const trimmedLine = line.trim();
    const headerMatch = trimmedLine.match(/^(#{1,3})\s+(.+)/);
    if (headerMatch) {
      const hashes = headerMatch[1];
      const content = headerMatch[2];
      if (hashes === "###") {
        return `<div class="heading-sub">${content}</div>`;
      } else if (hashes === "##") {
        return `<div class="heading">${content}</div>`;
      }
    }
    const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)/);
    if (numberedMatch) {
      const number = numberedMatch[1];
      const content = numberedMatch[2];
      return `<span class="list-item-numbered"><span class="list-number">${number}.</span> ${content}</span>`;
    }
    const bulletMatch = trimmedLine.match(/^-\s+(.+)/);
    if (bulletMatch) {
      const content = bulletMatch[1];
      const leadingSpaces = ((_b = (_a = line.match(/^(\s*)/)) == null ? void 0 : _a[1]) == null ? void 0 : _b.length) || 0;
      const isIndented = leadingSpaces >= 2;
      if (isIndented) {
        return `<span class="list-item-sub">\u25E6 ${content}</span>`;
      }
      return `<span class="list-item">\u2022 ${content}</span>`;
    }
    return line;
  });
  processed = formattedLines.join("<br/>");
  return processed;
}

// src/components/agent-visualizer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var stateToLottieFile = {
  "not-joined": "Dark Mode - 340p - 01 - Not Joined.lottie",
  joining: "Dark Mode - 340p - 02 - Joining.lottie",
  ambient: "Dark Mode - 340p - 03 - Ambient.lottie",
  listening: "Dark Mode - 340p - 04 - Listening v3.2.lottie",
  analyzing: "Dark Mode - 340p - 05 - Analyzing - Scale Down Once.lottie",
  talking: "Dark Mode - 340p - 06 - Talking v3.lottie",
  disconnected: "Dark Mode - 340p - 07 - Disconnected.lottie"
};
var stateToText = {
  "not-joined": "Not Joined",
  joining: "Joining",
  ambient: "Ambient",
  listening: "Listening",
  analyzing: "Analyzing",
  talking: "Talking",
  disconnected: "Disconnected"
};
var sizeClasses = {
  sm: {
    container: "w-32 h-32",
    text: "text-sm"
  },
  md: {
    container: "w-48 h-48",
    text: "text-base"
  },
  lg: {
    container: "w-64 h-64",
    text: "text-lg"
  }
};
var AgentVisualizer = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      state,
      size = "md",
      lottieBasePath = "/agora-uikit/lottie",
      lottiePaths,
      className
    } = _b, props = __objRest(_b, [
      "state",
      "size",
      "lottieBasePath",
      "lottiePaths",
      "className"
    ]);
    const lottieFileName = stateToLottieFile[state];
    const displayText = stateToText[state];
    const sizeConfig = sizeClasses[size];
    const lottieSrc = (lottiePaths == null ? void 0 : lottiePaths[state]) || `${lottieBasePath}/${lottieFileName}`;
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "flex flex-col items-center justify-center gap-4",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex items-center justify-center",
                sizeConfig.container
              ),
              children: /* @__PURE__ */ jsx(
                DotLottieReact,
                {
                  src: lottieSrc,
                  loop: true,
                  autoplay: true,
                  className: "h-full w-full"
                }
              )
            }
          ),
          displayText && /* @__PURE__ */ jsx(
            "p",
            {
              className: cn(
                "text-foreground text-center font-medium",
                sizeConfig.text
              ),
              children: displayText
            }
          )
        ]
      })
    );
  }
);
AgentVisualizer.displayName = "AgentVisualizer";

// src/components/avatar.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12"
};
var getInitials = (name, customInitials) => {
  if (customInitials) return customInitials.toUpperCase();
  if (name) {
    return name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  }
  return "?";
};
var Avatar = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      src,
      icon,
      initials,
      name,
      size = "md",
      bgColor = "bg-gradient-to-br from-blue-500 to-blue-600",
      alt = "avatar"
    } = _b, props = __objRest(_b, [
      "className",
      "src",
      "icon",
      "initials",
      "name",
      "size",
      "bgColor",
      "alt"
    ]);
    const [imageError, setImageError] = React2.useState(false);
    const displayInitials = getInitials(name, initials);
    return /* @__PURE__ */ jsx2(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "ring-border flex items-center justify-center overflow-hidden rounded-full ring-1",
          sizeClasses2[size],
          className
        )
      }, props), {
        children: src && !imageError ? /* @__PURE__ */ jsx2(
          "img",
          {
            src,
            alt,
            className: "h-full w-full object-cover",
            onError: () => setImageError(true)
          }
        ) : icon ? /* @__PURE__ */ jsx2(
          "div",
          {
            className: cn(
              "flex items-center justify-center",
              bgColor,
              "text-white"
            ),
            children: icon
          }
        ) : /* @__PURE__ */ jsx2(
          "div",
          {
            className: cn(
              "flex items-center justify-center text-xs font-semibold text-white",
              bgColor,
              sizeClasses2[size]
            ),
            children: displayInitials
          }
        )
      })
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-font",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-12 px-4 py-4 rounded-md",
        icon: "h-10 w-10 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false,
    label,
    labelClassName
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild",
    "label",
    "labelClassName"
  ]);
  const Comp = asChild ? Slot : "button";
  const button = /* @__PURE__ */ jsx3(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props)
  );
  if (label) {
    return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col items-center", children: [
      button,
      /* @__PURE__ */ jsx3("p", { className: cn("text-muted-foreground mt-2 text-xs", labelClassName), children: label })
    ] });
  }
  return button;
}

// src/components/card.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx4(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-3 rounded-md border p-4",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx4(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn(
        "text-tiny leading-none font-semibold uppercase",
        className
      )
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx4(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("text-tiny", className)
    }, props)
  );
}

// src/components/chip.tsx
import * as React3 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Chip = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx5(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: "bg-card-layer-1 relative inline-flex items-center justify-center gap-2 rounded-full p-3"
      }, props), {
        children
      })
    );
  }
);
Chip.displayName = "Chip";

// src/components/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function Command(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx6(
    CommandPrimitive,
    __spreadValues({
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )
    }, props)
  );
}
function CommandInput(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx6(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx6(
          CommandPrimitive.Input,
          __spreadValues({
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            )
          }, props)
        )
      ]
    }
  );
}
function CommandList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx6(
    CommandPrimitive.List,
    __spreadValues({
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )
    }, props)
  );
}
function CommandEmpty(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx6(
    CommandPrimitive.Empty,
    __spreadValues({
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm"
    }, props)
  );
}
function CommandGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx6(
    CommandPrimitive.Group,
    __spreadValues({
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )
    }, props)
  );
}
function CommandItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx6(
    CommandPrimitive.Item,
    __spreadValues({
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}

// src/components/conversation.tsx
import * as React4 from "react";
import { ChevronDown } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var ConversationContext = React4.createContext(null);
var useConversation = () => {
  const context = React4.useContext(ConversationContext);
  if (!context) {
    throw new Error("useConversation must be used within Conversation");
  }
  return context;
};
var Conversation = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, height = "h-[400px]" } = _b, props = __objRest(_b, ["className", "height"]);
    const scrollRef = React4.useRef(null);
    const [showScrollButton, setShowScrollButton] = React4.useState(false);
    const scrollToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    React4.useEffect(() => {
      const handleScroll = () => {
        if (scrollRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
          const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
          setShowScrollButton(!isNearBottom);
        }
      };
      const observer = new MutationObserver(() => {
        setTimeout(scrollToBottom, 0);
      });
      if (scrollRef.current) {
        observer.observe(scrollRef.current, { childList: true, subtree: true });
        scrollRef.current.addEventListener("scroll", handleScroll);
      }
      return () => {
        observer.disconnect();
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);
    return /* @__PURE__ */ jsx7(ConversationContext.Provider, { value: { scrollRef }, children: /* @__PURE__ */ jsxs4(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "relative flex flex-col overflow-hidden",
          height,
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx7("div", { ref: scrollRef, className: "flex-1 overflow-y-auto", children: props.children }),
          showScrollButton && /* @__PURE__ */ jsx7(ConversationScrollButton, { onClick: scrollToBottom })
        ]
      })
    ) });
  }
);
Conversation.displayName = "Conversation";
var ConversationContent = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, padding = "p-4" } = _b, props = __objRest(_b, ["className", "padding"]);
  return /* @__PURE__ */ jsx7(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col gap-4", padding, className)
    }, props)
  );
});
ConversationContent.displayName = "ConversationContent";
var ConversationEmptyState = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      icon,
      title = "No messages yet",
      description = "Start a conversation to see messages here"
    } = _b, props = __objRest(_b, [
      "className",
      "icon",
      "title",
      "description"
    ]);
    return /* @__PURE__ */ jsxs4(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "flex h-full flex-col items-center justify-center gap-3 p-8 text-center",
          className
        )
      }, props), {
        children: [
          icon && /* @__PURE__ */ jsx7("div", { className: "flex justify-center", children: icon }),
          /* @__PURE__ */ jsxs4("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx7("h3", { className: "font-semibold", children: title }),
            /* @__PURE__ */ jsx7("p", { className: "text-muted-foreground text-sm", children: description })
          ] })
        ]
      })
    );
  }
);
ConversationEmptyState.displayName = "ConversationEmptyState";
var ConversationScrollButton = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { scrollRef } = useConversation();
  return /* @__PURE__ */ jsx7(
    Button,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "absolute bottom-4 left-1/2 -translate-x-1/2 shadow-md",
        className
      ),
      onClick: () => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }
    }, props), {
      children: /* @__PURE__ */ jsx7(ChevronDown, { className: "h-4 w-4" })
    })
  );
});
ConversationScrollButton.displayName = "ConversationScrollButton";

// src/components/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx8(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx8(
    DropdownMenuPrimitive.Trigger,
    __spreadValues({
      "data-slot": "dropdown-menu-trigger"
    }, props)
  );
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsx8(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx8(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border",
        className
      )
    }, props)
  ) });
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ jsx8(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "bg-card-layer-2 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground text-small relative flex cursor-pointer items-center gap-2 px-4 py-3 leading-snug outline-hidden select-none hover:bg-[var(--color-neutral)]/25 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function DropdownMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ jsxs5(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx8("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx8(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx8(CheckIcon, { className: "size-2" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx8(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}

// src/components/hello-world.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function HelloWorld(_a) {
  var _b = _a, {
    className,
    message = "Hello, World!"
  } = _b, props = __objRest(_b, [
    "className",
    "message"
  ]);
  return /* @__PURE__ */ jsxs6(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "bg-card text-card-foreground rounded-lg border p-8 shadow-sm",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx9("h1", { className: "mb-4 text-2xl font-bold", children: message }),
        /* @__PURE__ */ jsx9("p", { className: "text-muted-foreground", children: "Welcome to Agora AI Builder UI! This is your first component ." })
      ]
    })
  );
}

// src/components/icon-button.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx10 } from "react/jsx-runtime";
var iconButtonVariants = cva2(
  "relative inline-flex items-center justify-center cursor-pointer transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 outline-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      shape: {
        round: "rounded-full",
        square: "rounded-md"
      },
      variant: {
        filled: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        outlined: "border border-primary text-primary hover:bg-primary/10 active:bg-primary/20",
        standard: "text-foreground hover:bg-accent/10 active:bg-accent/20"
      },
      size: {
        default: "h-12 w-12 [&_svg:not([class*='size-'])]:size-6",
        sm: "h-6 w-6 [&_svg:not([class*='size-'])]:size-3",
        md: "h-10 w-10 [&_svg:not([class*='size-'])]:size-5",
        lg: "h-12 w-12 [&_svg:not([class*='size-'])]:size-6",
        xl: "h-14 w-14 [&_svg:not([class*='size-'])]:size-8"
      }
    },
    defaultVariants: {
      shape: "round",
      variant: "filled",
      size: "default"
    }
  }
);
function IconButton(_a) {
  var _b = _a, {
    className,
    shape,
    variant,
    size
  } = _b, props = __objRest(_b, [
    "className",
    "shape",
    "variant",
    "size"
  ]);
  return /* @__PURE__ */ jsx10(
    "button",
    __spreadValues({
      className: cn(iconButtonVariants({ shape, variant, size, className }))
    }, props)
  );
}

// src/components/live-waveform.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState3 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var LiveWaveform = (_a) => {
  var _b = _a, {
    active = false,
    data: externalData,
    deviceId,
    fftSize = 256,
    smoothingTimeConstant = 0.8,
    sensitivity = 1,
    barWidth = 3,
    barGap = 1,
    barRadius = 1.5,
    barColor,
    fadeEdges = true,
    fadeWidth = 24,
    height = 64,
    onError,
    className
  } = _b, props = __objRest(_b, [
    "active",
    "data",
    "deviceId",
    "fftSize",
    "smoothingTimeConstant",
    "sensitivity",
    "barWidth",
    "barGap",
    "barRadius",
    "barColor",
    "fadeEdges",
    "fadeWidth",
    "height",
    "onError",
    "className"
  ]);
  const [data, setData] = useState3(externalData || []);
  const canvasRef = useRef2(null);
  const containerRef = useRef2(null);
  const analyserRef = useRef2(null);
  const audioContextRef = useRef2(null);
  const streamRef = useRef2(null);
  const animationIdRef = useRef2(null);
  const heightStyle = typeof height === "number" ? `${height}px` : height;
  useEffect2(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    });
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);
  useEffect2(() => {
    if (!active || !deviceId) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      let rafId;
      let t = 0;
      const animateIdle = () => {
        t += 0.03;
        const idleArray = Array.from(
          { length: 64 },
          (_, i) => 0.05 + Math.sin(t + i * 0.3) * 0.01
        );
        setData(idleArray);
        rafId = requestAnimationFrame(animateIdle);
      };
      animateIdle();
      return () => cancelAnimationFrame(rafId);
    }
    const setupMicrophone = async () => {
      try {
        const audioConstraints = {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        };
        if (deviceId) {
          audioConstraints.deviceId = deviceId;
        }
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: audioConstraints
        });
        streamRef.current = stream;
        const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContextConstructor();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = fftSize;
        analyser.smoothingTimeConstant = smoothingTimeConstant;
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const updateData = () => {
          if (!analyserRef.current || !active) return;
          analyserRef.current.getByteFrequencyData(dataArray);
          const startFreq = Math.floor(dataArray.length * 0.05);
          const endFreq = Math.floor(dataArray.length * 0.4);
          const relevantData = dataArray.slice(startFreq, endFreq);
          const halfLength = Math.floor(relevantData.length / 2);
          const normalizedData = [];
          for (let i = halfLength - 1; i >= 0; i--) {
            const value = Math.min(1, relevantData[i] / 255 * sensitivity);
            normalizedData.push(value);
          }
          for (let i = 0; i < halfLength; i++) {
            const value = Math.min(1, relevantData[i] / 255 * sensitivity);
            normalizedData.push(value);
          }
          setData(normalizedData);
          animationIdRef.current = requestAnimationFrame(updateData);
        };
        updateData();
      } catch (error) {
        onError == null ? void 0 : onError(error);
      }
    };
    setupMicrophone();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [active, deviceId, fftSize, smoothingTimeConstant, sensitivity, onError]);
  useEffect2(() => {
    if (externalData) {
      setData(externalData);
    }
  }, [externalData]);
  useEffect2(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let rafId;
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const computedBarColor = barColor || (() => {
        const style = getComputedStyle(canvas);
        const color = style.color;
        return color || "#000";
      })();
      const step = barWidth + barGap;
      const barCount = Math.floor(rect.width / step);
      const centerY = rect.height / 2;
      for (let i = 0; i < barCount && i < data.length; i++) {
        const value = data[i] || 0.05;
        const x = i * step;
        const barHeight = Math.max(4, value * rect.height * 0.8);
        const y = centerY - barHeight / 2;
        ctx.fillStyle = computedBarColor;
        ctx.globalAlpha = 0.4 + value * 0.6;
        if (barRadius > 0) {
          ctx.beginPath();
          ctx.roundRect(x, y, barWidth, barHeight, barRadius);
          ctx.fill();
        } else {
          ctx.fillRect(x, y, barWidth, barHeight);
        }
      }
      if (fadeEdges && fadeWidth > 0 && rect.width > 0) {
        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
        const fadePercent = Math.min(0.3, fadeWidth / rect.width);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(fadePercent, "rgba(255,255,255,0)");
        gradient.addColorStop(1 - fadePercent, "rgba(255,255,255,0)");
        gradient.addColorStop(1, "rgba(255,255,255,1)");
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, rect.width, rect.height);
        ctx.globalCompositeOperation = "source-over";
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [data, barWidth, barGap, barRadius, barColor, fadeEdges, fadeWidth]);
  return /* @__PURE__ */ jsx11(
    "div",
    __spreadProps(__spreadValues({
      className: cn("relative h-full w-full", className),
      ref: containerRef,
      style: { height: heightStyle },
      "aria-label": active ? "Live audio waveform" : "Audio waveform idle",
      role: "img"
    }, props), {
      children: /* @__PURE__ */ jsx11(
        "canvas",
        {
          className: "block h-full w-full",
          ref: canvasRef,
          "aria-hidden": "true"
        }
      )
    })
  );
};

// src/components/message.tsx
import * as React5 from "react";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var Message = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, from, avatar, children } = _b, props = __objRest(_b, ["className", "from", "avatar", "children"]);
    const messageContent = /* @__PURE__ */ jsxs7("div", { className: "flex items-end gap-3", children: [
      from === "assistant" && avatar,
      /* @__PURE__ */ jsx12("div", { className: "flex flex-col", children }),
      from === "user" && avatar
    ] });
    return /* @__PURE__ */ jsx12(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "flex w-full py-4",
          from === "user" ? "justify-end" : "justify-start",
          className
        )
      }, props), {
        children: messageContent
      })
    );
  }
);
Message.displayName = "Message";
var MessageContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  var _a2;
  const parentElement = React5.useRef(null);
  const messageElement = (_a2 = parentElement.current) == null ? void 0 : _a2.parentElement;
  const isUser = (messageElement == null ? void 0 : messageElement.children[0]) === parentElement.current;
  return /* @__PURE__ */ jsx12(
    "div",
    __spreadValues({
      ref: parentElement,
      className: cn(
        "flex max-w-xs flex-col gap-2 rounded-2xl px-4 py-3",
        isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground",
        className
      )
    }, props)
  );
});
MessageContent.displayName = "MessageContent";

// src/components/mic-button.tsx
import * as React6 from "react";
import { Mic, MicOff } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var MicButton = React6.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      state = "idle",
      icon = /* @__PURE__ */ jsx13(Mic, { className: "h-4 w-4" }),
      showErrorBadge = false,
      className,
      disabled
    } = _b, props = __objRest(_b, [
      "state",
      "icon",
      "showErrorBadge",
      "className",
      "disabled"
    ]);
    const isListening = state === "listening";
    const isProcessing = state === "processing";
    const isError = state === "error";
    const isActive = isListening || isProcessing;
    return /* @__PURE__ */ jsxs8(
      "button",
      __spreadProps(__spreadValues({
        ref,
        disabled: disabled || isError,
        className: cn(
          "relative inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
          // Idle and active states
          !isError && "border-input bg-background hover:bg-accent focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          // Error state
          isError && "border-destructive bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          // Disabled state
          disabled && "cursor-not-allowed opacity-50",
          className
        )
      }, props), {
        children: [
          isError ? /* @__PURE__ */ jsx13(MicOff, { className: "h-4 w-4" }) : icon,
          isActive && /* @__PURE__ */ jsx13(
            LiveWaveform,
            {
              active: isListening,
              barColor: isProcessing ? "#94a3b8" : "#3b82f6",
              fadeEdges: false
            }
          ),
          isError && showErrorBadge && /* @__PURE__ */ jsx13("div", { className: "absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-amber-900", children: /* @__PURE__ */ jsx13("span", { className: "text-xs leading-none font-bold", children: "!" }) })
        ]
      })
    );
  }
);
MicButton.displayName = "MicButton";

// src/components/mic-selector.tsx
import { useEffect as useEffect4, useState as useState5 } from "react";
import { Check, ChevronDown as ChevronDown2, Mic as Mic2, MicOff as MicOff2 } from "lucide-react";

// src/hooks/use-audio-devices.ts
import { useCallback, useEffect as useEffect3, useState as useState4 } from "react";
function useAudioDevices() {
  const [devices, setDevices] = useState4([]);
  const [loading, setLoading] = useState4(true);
  const [error, setError] = useState4(null);
  const [hasPermission, setHasPermission] = useState4(false);
  const loadDevicesWithoutPermission = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const deviceList = await navigator.mediaDevices.enumerateDevices();
      const audioInputs = deviceList.filter((device) => device.kind === "audioinput").map((device) => {
        let cleanLabel = device.label || `Microphone ${device.deviceId.slice(0, 8)}`;
        cleanLabel = cleanLabel.replace(/\s*\([^)]*\)/g, "").trim();
        return {
          deviceId: device.deviceId,
          label: cleanLabel,
          groupId: device.groupId
        };
      });
      setDevices(audioInputs);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to get audio devices"
      );
      console.error("Error getting audio devices:", err);
    } finally {
      setLoading(false);
    }
  }, []);
  const loadDevicesWithPermission = useCallback(async () => {
    if (loading) return;
    try {
      setLoading(true);
      setError(null);
      const tempStream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      tempStream.getTracks().forEach((track) => track.stop());
      const deviceList = await navigator.mediaDevices.enumerateDevices();
      const audioInputs = deviceList.filter((device) => device.kind === "audioinput").map((device) => {
        let cleanLabel = device.label || `Microphone ${device.deviceId.slice(0, 8)}`;
        cleanLabel = cleanLabel.replace(/\s*\([^)]*\)/g, "").trim();
        return {
          deviceId: device.deviceId,
          label: cleanLabel,
          groupId: device.groupId
        };
      });
      setDevices(audioInputs);
      setHasPermission(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to get audio devices"
      );
      console.error("Error getting audio devices:", err);
    } finally {
      setLoading(false);
    }
  }, [loading]);
  useEffect3(() => {
    loadDevicesWithoutPermission();
  }, [loadDevicesWithoutPermission]);
  useEffect3(() => {
    const handleDeviceChange = () => {
      if (hasPermission) {
        loadDevicesWithPermission();
      } else {
        loadDevicesWithoutPermission();
      }
    };
    navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);
    return () => {
      navigator.mediaDevices.removeEventListener(
        "devicechange",
        handleDeviceChange
      );
    };
  }, [hasPermission, loadDevicesWithPermission, loadDevicesWithoutPermission]);
  return {
    devices,
    loading,
    error,
    hasPermission,
    loadDevices: loadDevicesWithPermission
  };
}

// src/components/mic-selector.tsx
import { Fragment, jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function MicSelector({
  value,
  onValueChange,
  muted,
  onMutedChange,
  disabled = false,
  className
}) {
  var _a;
  const [state, setState] = useState5("idle");
  const { devices, loading, error, hasPermission, loadDevices } = useAudioDevices();
  const [selectedDevice, setSelectedDevice] = useState5(value || "");
  const [internalMuted, setInternalMuted] = useState5(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState5(false);
  const isMuted = muted !== void 0 ? muted : internalMuted;
  useEffect4(() => {
    if (value !== void 0) {
      setSelectedDevice(value);
    }
  }, [value]);
  const defaultDeviceId = ((_a = devices[0]) == null ? void 0 : _a.deviceId) || "";
  useEffect4(() => {
    if (!selectedDevice && defaultDeviceId) {
      const newDevice = defaultDeviceId;
      setSelectedDevice(newDevice);
      onValueChange == null ? void 0 : onValueChange(newDevice);
    }
  }, [defaultDeviceId, selectedDevice, onValueChange]);
  const currentDevice = devices.find((d) => d.deviceId === selectedDevice) || devices[0] || {
    label: loading ? "Loading..." : "No microphone",
    deviceId: ""
  };
  const handleDeviceSelect = (deviceId, e) => {
    e == null ? void 0 : e.preventDefault();
    setSelectedDevice(deviceId);
    onValueChange == null ? void 0 : onValueChange(deviceId);
  };
  const handleDropdownOpenChange = async (open) => {
    setIsDropdownOpen(open);
    if (open && !hasPermission && !loading) {
      await loadDevices();
    }
  };
  const toggleMute = () => {
    const newMuted = !isMuted;
    if (muted === void 0) {
      setInternalMuted(newMuted);
    }
    onMutedChange == null ? void 0 : onMutedChange(newMuted);
  };
  const isError = state === "error" || !hasPermission;
  console.log("supriya-isError: ", isError, isMuted);
  return /* @__PURE__ */ jsxs9(Chip, { children: [
    /* @__PURE__ */ jsxs9("div", { children: [
      /* @__PURE__ */ jsx14(
        IconButton,
        {
          onClick: toggleMute,
          shape: "round",
          variant: "standard",
          size: "sm",
          disabled: isError,
          children: isError ? /* @__PURE__ */ jsx14(MicOff2, { className: `size-4` }) : isMuted ? /* @__PURE__ */ jsx14(MicOff2, { className: `text-error size-4` }) : /* @__PURE__ */ jsx14(Mic2, { className: `size-4` })
        }
      ),
      isError && /* @__PURE__ */ jsx14("div", { className: "bg-warning absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx14("span", { className: "text-hard-black text-xs leading-none font-bold", children: "!" }) })
    ] }),
    /* @__PURE__ */ jsx14("div", { className: "w-10", children: /* @__PURE__ */ jsx14(
      LiveWaveform,
      {
        active: !isMuted,
        deviceId: selectedDevice || defaultDeviceId,
        height: 20,
        barWidth: 3,
        barGap: 1
      }
    ) }),
    /* @__PURE__ */ jsxs9(DropdownMenu, { onOpenChange: handleDropdownOpenChange, children: [
      /* @__PURE__ */ jsx14(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx14(ChevronDown2, { className: "size-6 flex-shrink-0" }) }),
      /* @__PURE__ */ jsx14(DropdownMenuContent, { align: "center", side: "top", className: "w-72", children: loading ? /* @__PURE__ */ jsx14("div", { className: "text-muted-foreground px-4 py-3 text-center text-sm", children: "Loading devices..." }) : error ? /* @__PURE__ */ jsxs9("div", { className: "text-error px-4 py-3 text-center text-sm", children: [
        "Error: ",
        error
      ] }) : devices.length === 0 ? /* @__PURE__ */ jsx14("div", { className: "text-muted-foreground px-4 py-3 text-center text-sm", children: "No microphones available" }) : /* @__PURE__ */ jsx14(Fragment, { children: devices.map((device) => /* @__PURE__ */ jsxs9(
        DropdownMenuItem,
        {
          onClick: (e) => handleDeviceSelect(device.deviceId, e),
          onSelect: (e) => e.preventDefault(),
          className: "flex cursor-pointer items-center justify-between",
          disabled: loading && isError,
          children: [
            /* @__PURE__ */ jsx14("span", { className: "truncate", children: device.label }),
            selectedDevice === device.deviceId && /* @__PURE__ */ jsx14(Check, { className: "size-5 flex-shrink-0" })
          ]
        },
        device.deviceId
      )) }) })
    ] })
  ] });
}

// src/components/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx15 } from "react/jsx-runtime";
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx15(PopoverPrimitive.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx15(PopoverPrimitive.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
}
function PopoverContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsx15(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx15(
    PopoverPrimitive.Content,
    __spreadValues({
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ) });
}

// src/components/response.tsx
import * as React7 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var Response = React7.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx16(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "text-sm leading-relaxed break-words whitespace-pre-wrap",
          className
        )
      }, props)
    );
  }
);
Response.displayName = "Response";

// src/components/value-picker.tsx
import * as React8 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown as ChevronDown3 } from "lucide-react";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var ValuePicker = React8.forwardRef(
  ({
    items,
    value,
    onValueChange,
    placeholder = "Select a value...",
    label,
    disabled,
    open,
    onOpenChange
  }, ref) => {
    const selectedItem = items.find((i) => i.id === value);
    return /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-3", children: [
      label && /* @__PURE__ */ jsx17("label", { className: "text-small font-medium", children: label }),
      /* @__PURE__ */ jsxs10(
        SelectPrimitive.Root,
        {
          value,
          onValueChange,
          open,
          onOpenChange,
          children: [
            /* @__PURE__ */ jsxs10(
              SelectPrimitive.Trigger,
              {
                ref,
                disabled,
                className: cn(
                  "bg-input-field-bg text-font-high text-normal inline-flex w-full items-center justify-between border p-3 font-medium outline-hidden",
                  "data-[state=closed]:rounded-md data-[state=open]:rounded-none",
                  "data-[placeholder]:text-muted-foreground",
                  "disabled:pointer-events-none disabled:opacity-50"
                ),
                children: [
                  /* @__PURE__ */ jsx17(SelectPrimitive.Value, { placeholder, asChild: true, children: /* @__PURE__ */ jsx17("span", { className: "truncate leading-tight", children: (selectedItem == null ? void 0 : selectedItem.name) || placeholder }) }),
                  /* @__PURE__ */ jsx17(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx17(ChevronDown3, { className: "size-5" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx17(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs10(
              SelectPrimitive.Content,
              {
                className: cn(
                  "bg-input-field-bg text-font-high text-normal border-t-primary-brand relative z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-br-md rounded-bl-md border p-0",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out",
                  "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                  "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                  "data-[side=bottom]:slide-in-from-top-2",
                  "data-[side=left]:slide-in-from-right-2",
                  "data-[side=right]:slide-in-from-left-2",
                  "data-[side=top]:slide-in-from-bottom-2"
                ),
                position: "popper",
                sideOffset: 0,
                children: [
                  /* @__PURE__ */ jsx17(SelectPrimitive.ScrollUpButton, { className: "flex cursor-default items-center justify-center py-1", children: /* @__PURE__ */ jsx17(ChevronDown3, { className: "size-4 rotate-180" }) }),
                  /* @__PURE__ */ jsx17(SelectPrimitive.Viewport, { className: "max-h-[150px] overflow-y-auto", children: items.length === 0 ? /* @__PURE__ */ jsx17("div", { className: "text-muted-foreground py-6 text-center text-sm", children: "No items found." }) : items.map((item) => /* @__PURE__ */ jsxs10(
                    SelectPrimitive.Item,
                    {
                      value: item.id,
                      className: cn(
                        "bg-input-field-bg text-normal relative flex cursor-pointer items-center gap-2 rounded-sm p-3 pr-8 outline-hidden select-none",
                        "transition-colors hover:rounded-none hover:bg-[var(--color-neutral)]/25",
                        "data-[state=checked]:rounded-none data-[state=checked]:bg-[var(--color-neutral)]/15",
                        "focus-visible:bg-[var(--color-neutral)]/15"
                      ),
                      children: [
                        /* @__PURE__ */ jsx17(SelectPrimitive.ItemText, { className: "flex-1", children: item.name }),
                        /* @__PURE__ */ jsx17("span", { className: "pointer-events-none absolute right-3 flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx17(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx17(Check2, { className: "size-4" }) }) })
                      ]
                    },
                    item.id
                  )) }),
                  /* @__PURE__ */ jsx17(SelectPrimitive.ScrollDownButton, { className: "flex cursor-default items-center justify-center py-1", children: /* @__PURE__ */ jsx17(ChevronDown3, { className: "size-4" }) })
                ]
              }
            ) })
          ]
        }
      )
    ] });
  }
);
ValuePicker.displayName = "ValuePicker";

// src/components/audio-visualizer.tsx
import { useEffect as useEffect5, useRef as useRef4, useState as useState6 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var AudioVisualizer = ({
  track,
  gradientColors = ["#A0FAFF", "#FCF9F8", "#C46FFB"],
  className = ""
}) => {
  const [isVisualizing, setIsVisualizing] = useState6(false);
  const audioContextRef = useRef4(null);
  const analyserRef = useRef4(null);
  const animationFrameRef = useRef4(void 0);
  const barsRef = useRef4([]);
  const animate = () => {
    if (!analyserRef.current) {
      console.log("No analyser found in animate");
      return;
    }
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);
    const frequencyRanges = [
      [24, 31],
      // Highest (bar 0, 8)
      [16, 23],
      // Mid-high (bar 1, 7)
      [8, 15],
      // Mid (bar 2, 6)
      [4, 7],
      // Low-mid (bar 3, 5)
      [0, 3]
      // Lowest (bar 4 - center)
    ];
    barsRef.current.forEach((bar, index) => {
      if (!bar) {
        console.log("No bar found at index", index);
        return;
      }
      const rangeIndex = index < 5 ? index : 8 - index;
      const [start, end] = frequencyRanges[rangeIndex];
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += dataArray[i];
      }
      let average = sum / (end - start + 1);
      const multipliers = [0.7, 0.8, 0.85, 0.9, 0.95];
      const multiplierIndex = index < 5 ? index : 8 - index;
      average *= multipliers[multiplierIndex];
      const height = Math.min(average / 255 * 100, 100);
      bar.style.height = `${height}px`;
    });
    animationFrameRef.current = requestAnimationFrame(animate);
  };
  useEffect5(() => {
    if (!track) {
      console.log("No track provided");
      return;
    }
    const startVisualizer = async () => {
      try {
        console.log("Starting visualizer");
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 64;
        let mediaStreamTrack;
        if (track instanceof MediaStream) {
          const audioTracks = track.getAudioTracks();
          if (audioTracks.length === 0) {
            console.error("No audio tracks found in MediaStream");
            return;
          }
          mediaStreamTrack = audioTracks[0];
        } else {
          mediaStreamTrack = track.getMediaStreamTrack();
        }
        const stream = new MediaStream([mediaStreamTrack]);
        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);
        console.log("Setup complete, starting animation");
        setIsVisualizing(true);
        animate();
      } catch (error) {
        console.error("Error starting visualizer:", error);
      }
    };
    startVisualizer();
    return () => {
      console.log("Cleaning up");
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [track]);
  const gradientString = `linear-gradient(to top, ${gradientColors.join(", ")})`;
  return /* @__PURE__ */ jsx18(
    "div",
    {
      className: `relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg ${className}`,
      children: /* @__PURE__ */ jsx18("div", { className: "relative z-10 flex h-[100px] items-center space-x-2", children: [...Array(9)].map((_, index) => /* @__PURE__ */ jsx18(
        "div",
        {
          ref: (el) => {
            barsRef.current[index] = el;
          },
          className: "visualizer-bar w-3 rounded-full transition-all duration-75",
          style: {
            height: "2px",
            transformOrigin: "bottom",
            minHeight: "2px",
            display: "block",
            position: "relative",
            background: gradientString,
            opacity: 1
          }
        },
        index
      )) })
    }
  );
};

// src/components/mic-button-with-visualizer.tsx
import { useEffect as useEffect6, useRef as useRef5, useState as useState7 } from "react";
import { useRTCClient } from "agora-rtc-react";
import { Mic as Mic3, MicOff as MicOff3 } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
function MicButtonWithVisualizer({
  isEnabled,
  setIsEnabled,
  track,
  enabledColor = "#A0FAFF",
  disabledColor = "#DE344A",
  onToggle,
  className = "",
  localMicrophoneTrack
  // deprecated
}) {
  const [audioData, setAudioData] = useState7(
    Array(5).fill({ height: 0 })
  );
  const client = useRTCClient();
  const audioContextRef = useRef5(null);
  const analyserRef = useRef5(null);
  const animationFrameRef = useRef5(void 0);
  const audioTrack = track || localMicrophoneTrack;
  useEffect6(() => {
    if (audioTrack && isEnabled) {
      setupAudioAnalyser();
    } else {
      cleanupAudioAnalyser();
    }
    return () => cleanupAudioAnalyser();
  }, [audioTrack, isEnabled]);
  const setupAudioAnalyser = async () => {
    if (!audioTrack) return;
    try {
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
      analyserRef.current.smoothingTimeConstant = 0.5;
      let mediaStream;
      if (audioTrack instanceof MediaStream) {
        mediaStream = audioTrack;
      } else {
        const mediaStreamTrack = audioTrack.getMediaStreamTrack();
        mediaStream = new MediaStream([mediaStreamTrack]);
      }
      const source = audioContextRef.current.createMediaStreamSource(mediaStream);
      source.connect(analyserRef.current);
      updateAudioData();
    } catch (error) {
      console.error("Error setting up audio analyser:", error);
    }
  };
  const cleanupAudioAnalyser = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setAudioData(Array(5).fill({ height: 0 }));
  };
  const updateAudioData = () => {
    if (!analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    const segmentSize = Math.floor(dataArray.length / 5);
    const newAudioData = Array(5).fill(0).map((_, index) => {
      const start = index * segmentSize;
      const end = start + segmentSize;
      const segment = dataArray.slice(start, end);
      const average = segment.reduce((a, b) => a + b, 0) / segment.length;
      const scaledHeight = Math.min(60, average / 255 * 100 * 1.2);
      const height = Math.pow(scaledHeight / 60, 0.7) * 60;
      return {
        height
      };
    });
    setAudioData(newAudioData);
    animationFrameRef.current = requestAnimationFrame(updateAudioData);
  };
  const toggleMicrophone = async () => {
    if (onToggle) {
      await onToggle();
      return;
    }
    const agoraTrack = audioTrack && !(audioTrack instanceof MediaStream) ? audioTrack : null;
    if (agoraTrack) {
      const newState = !isEnabled;
      try {
        await agoraTrack.setEnabled(newState);
        if (!newState) {
          await client.unpublish(agoraTrack);
        } else {
          await client.publish(agoraTrack);
        }
        setIsEnabled(newState);
        console.log("Microphone state updated successfully");
      } catch (error) {
        console.error("Failed to toggle microphone:", error);
        agoraTrack.setEnabled(isEnabled);
      }
    } else {
      setIsEnabled(!isEnabled);
    }
  };
  const activeColor = isEnabled ? enabledColor : disabledColor;
  return /* @__PURE__ */ jsxs11(
    "button",
    {
      onClick: toggleMicrophone,
      className: `group relative flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 ${className}`,
      style: {
        borderColor: activeColor
      },
      children: [
        /* @__PURE__ */ jsx19("div", { className: "absolute inset-0 flex items-center justify-center gap-1", children: audioData.map((bar, index) => /* @__PURE__ */ jsx19(
          "div",
          {
            className: "w-1 rounded-full transition-all duration-100 group-hover:bg-black group-active:bg-black",
            style: {
              height: `${bar.height}%`,
              transform: `scaleY(${Math.max(0.1, bar.height / 100)})`,
              transformOrigin: "center",
              backgroundColor: activeColor
            }
          },
          index
        )) }),
        /* @__PURE__ */ jsx19("div", { className: "relative z-10 transition-colors duration-300", children: isEnabled ? /* @__PURE__ */ jsx19(
          Mic3,
          {
            size: 24,
            className: "transition-colors duration-300 group-hover:text-black group-active:text-black",
            style: { color: enabledColor }
          }
        ) : /* @__PURE__ */ jsx19(
          MicOff3,
          {
            size: 24,
            className: "transition-colors duration-300 group-hover:text-black group-active:text-black",
            style: { color: disabledColor }
          }
        ) })
      ]
    }
  );
}

// src/components/convo-text-stream.tsx
import { useEffect as useEffect8, useRef as useRef6, useState as useState9 } from "react";
import { MessageCircle, X } from "lucide-react";

// src/hooks/use-is-mobile.ts
import * as React11 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React11.useState(void 0);
  React11.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/lib/message-engine.ts
var DEFAULT_MESSAGE_CACHE_TIMEOUT = 1e3 * 60 * 5;
var EMessageStatus = /* @__PURE__ */ ((EMessageStatus2) => {
  EMessageStatus2[EMessageStatus2["IN_PROGRESS"] = 0] = "IN_PROGRESS";
  EMessageStatus2[EMessageStatus2["END"] = 1] = "END";
  EMessageStatus2[EMessageStatus2["INTERRUPTED"] = 2] = "INTERRUPTED";
  return EMessageStatus2;
})(EMessageStatus || {});
var EMessageEngineMode = /* @__PURE__ */ ((EMessageEngineMode2) => {
  EMessageEngineMode2["TEXT"] = "text";
  EMessageEngineMode2["WORD"] = "word";
  EMessageEngineMode2["AUTO"] = "auto";
  return EMessageEngineMode2;
})(EMessageEngineMode || {});

// src/components/convo-text-stream.tsx
import { jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
function ConvoTextStream({
  messageList,
  currentInProgressMessage = null,
  agentUID,
  messageSource = "auto",
  className = ""
}) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState9(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState9(true);
  const [hasNewMessages, setHasNewMessages] = useState9(false);
  const scrollRef = useRef6(null);
  const lastMessageRef = useRef6(null);
  const prevMessageLengthRef = useRef6(messageList.length);
  const prevMessageTextRef = useRef6("");
  const hasSeenFirstMessageRef = useRef6(false);
  useEffect8(() => {
    if (messageList.length > 0 || currentInProgressMessage) {
      console.log(
        "ConvoTextStream - Messages:",
        messageList.map((m) => ({
          uid: m.uid,
          text: m.text,
          status: m.status
        })),
        "Current in progress:",
        currentInProgressMessage,
        "Agent UID:",
        agentUID
      );
    }
  }, [messageList, currentInProgressMessage, agentUID]);
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isAtBottom);
    }
  };
  const hasContentChanged = () => {
    if (!currentInProgressMessage) return false;
    const currentText = currentInProgressMessage.text || "";
    const textLengthDiff = currentText.length - prevMessageTextRef.current.length;
    const hasSignificantChange = textLengthDiff > 20;
    if (hasSignificantChange) {
      prevMessageTextRef.current = currentText;
    }
    return hasSignificantChange;
  };
  useEffect8(() => {
    const hasNewMessage = messageList.length > 0;
    const hasInProgressMessage = shouldShowStreamingMessage() && currentInProgressMessage !== null;
    if ((hasNewMessage || hasInProgressMessage) && !hasSeenFirstMessageRef.current) {
      if (!isOpen) {
        setIsOpen(true);
      }
      setHasNewMessages(true);
      hasSeenFirstMessageRef.current = true;
    }
  }, [messageList, currentInProgressMessage, isMobile, isOpen]);
  useEffect8(() => {
    const hasNewMessage = messageList.length > prevMessageLengthRef.current;
    const hasStreamingChange = hasContentChanged();
    if ((hasNewMessage || shouldAutoScroll || hasStreamingChange) && scrollRef.current) {
      scrollToBottom();
    }
    prevMessageLengthRef.current = messageList.length;
  }, [messageList, currentInProgressMessage == null ? void 0 : currentInProgressMessage.text, shouldAutoScroll]);
  useEffect8(() => {
    if ((currentInProgressMessage == null ? void 0 : currentInProgressMessage.status) === 0 /* IN_PROGRESS */ && shouldAutoScroll) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [currentInProgressMessage == null ? void 0 : currentInProgressMessage.text]);
  const shouldShowStreamingMessage = () => {
    return currentInProgressMessage !== null && currentInProgressMessage.status === 0 /* IN_PROGRESS */ && currentInProgressMessage.text.trim().length > 0;
  };
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      hasSeenFirstMessageRef.current = true;
      setHasNewMessages(false);
    }
  };
  const isAIMessage = (message) => {
    return message.uid === 0 || agentUID && message.uid.toString() === agentUID;
  };
  const allMessages = [...messageList];
  if (shouldShowStreamingMessage() && currentInProgressMessage) {
    allMessages.push(currentInProgressMessage);
  }
  return /* @__PURE__ */ jsx20(
    "div",
    {
      id: "chatbox",
      className: cn(
        "fixed z-50",
        isOpen ? "right-4 bottom-32 left-4 md:right-8 md:bottom-24 md:left-auto" : "right-4 bottom-6 md:right-8 md:bottom-8",
        className
      ),
      children: isOpen ? /* @__PURE__ */ jsxs12(
        "div",
        {
          className: "chatbox expanded mx-auto flex max-w-96 min-w-96 flex-col shadow-lg md:mx-0",
          style: { backgroundColor: "#171717", borderRadius: "15px" },
          children: [
            /* @__PURE__ */ jsxs12("div", { className: "flex shrink-0 items-center justify-end p-2", children: [
              /* @__PURE__ */ jsx20("h3", { className: "mr-auto ml-2 font-semibold", children: "Transcription" }),
              /* @__PURE__ */ jsx20(
                "button",
                {
                  onClick: toggleChat,
                  className: "inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10",
                  children: /* @__PURE__ */ jsx20(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx20(
              "div",
              {
                className: "flex-1 overflow-auto",
                ref: scrollRef,
                onScroll: handleScroll,
                children: /* @__PURE__ */ jsx20("div", { className: "space-y-4 p-4", children: allMessages.map((message, index) => /* @__PURE__ */ jsxs12(
                  "div",
                  {
                    ref: index === allMessages.length - 1 ? lastMessageRef : null,
                    className: cn(
                      "flex w-full items-start gap-2",
                      isAIMessage(message) ? "flex-row" : "flex-row-reverse"
                    ),
                    children: [
                      /* @__PURE__ */ jsx20(
                        "div",
                        {
                          className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium",
                          style: {
                            backgroundColor: isAIMessage(message) ? "#A0FAFF" : "#333333",
                            color: isAIMessage(message) ? "#000000" : "#FFFFFF"
                          },
                          children: isAIMessage(message) ? "AI" : "U"
                        }
                      ),
                      /* @__PURE__ */ jsx20(
                        "div",
                        {
                          className: cn(
                            "flex",
                            isAIMessage(message) ? "flex-col items-start" : "flex-col items-end"
                          ),
                          children: /* @__PURE__ */ jsx20(
                            "div",
                            {
                              className: cn(
                                "rounded-[15px] px-3 py-2",
                                isAIMessage(message) ? "text-left" : "text-right",
                                message.status === 0 /* IN_PROGRESS */ && "animate-pulse"
                              ),
                              style: {
                                backgroundColor: isAIMessage(message) ? "transparent" : "#333333",
                                color: isAIMessage(message) ? "#A0FAFF" : "#FFFFFF"
                              },
                              dangerouslySetInnerHTML: {
                                __html: renderMarkdownToHtml(message.text)
                              }
                            }
                          )
                        }
                      )
                    ]
                  },
                  `${message.turn_id}-${message.uid}-${message.status}`
                )) })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsx20(
        "button",
        {
          onClick: toggleChat,
          className: cn(
            "group mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-110",
            "border-white bg-[#333333] hover:bg-white active:bg-white",
            hasNewMessages && "animate-chat-pulse"
          ),
          children: /* @__PURE__ */ jsx20(MessageCircle, { className: "h-6 w-6 text-white transition-colors duration-300 ease-in-out group-hover:text-black group-active:text-black" })
        }
      )
    }
  );
}

// src/icons/PhoneReceiver.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function PhoneReceiver(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "8",
      viewBox: "0 0 20 8",
      fill: "none",
      className
    }, props), {
      children: /* @__PURE__ */ jsx21(
        "path",
        {
          d: "M10 0C11.8812 0 13.6803 0.390225 15.3972 1.17068C17.1142 1.95113 18.5848 3.08316 19.8091 4.56679C19.9285 4.72134 19.9919 4.89134 19.9994 5.07679C20.0069 5.26224 19.9434 5.42451 19.8091 5.5636L17.7039 7.74268C17.5845 7.86632 17.4128 7.93586 17.1888 7.95132C16.9649 7.96677 16.7857 7.92041 16.6513 7.81223L14.0983 5.84179C14.0087 5.76451 13.9415 5.67951 13.8967 5.58679C13.852 5.49406 13.8296 5.39361 13.8296 5.28542V2.06317C13.2025 1.8159 12.5642 1.64204 11.9148 1.54158C11.2653 1.44113 10.6271 1.3909 10 1.3909C9.37294 1.3909 8.73468 1.44113 8.08522 1.54158C7.43576 1.64204 6.7975 1.8159 6.17044 2.06317V5.28542C6.17044 5.39361 6.14804 5.49406 6.10325 5.58679C6.05846 5.67951 5.99128 5.76451 5.9017 5.84179L3.34866 7.81223C3.1695 7.95132 2.9866 8.01314 2.79998 7.99768C2.61335 7.98223 2.44539 7.89723 2.29609 7.74268L0.190948 5.5636C0.0565771 5.42451 -0.00687569 5.26224 0.000589345 5.07679C0.00805438 4.89134 0.0715071 4.72134 0.190948 4.56679C1.41521 3.08316 2.88582 1.95113 4.60278 1.17068C6.31974 0.390225 8.11881 0 10 0Z",
          fill: "currentColor"
        }
      )
    })
  );
}

// src/lib/theme/apply-theme.ts
var CSS_VAR_MAP = {
  PRIMARY_COLOR: "--primary",
  PRIMARY_ACTION_BRAND_COLOR: "--primary-brand",
  FONT_COLOR: "--foreground",
  PRIMARY_FONT_COLOR: "--font-high",
  SECONDARY_FONT_COLOR: "--secondary-foreground",
  BACKGROUND_COLOR: "--background",
  ICON_BG_COLOR: "--icon-bg",
  TOOLBAR_COLOR: "--toolbar-color",
  INPUT_FIELD_BACKGROUND_COLOR: "--input-field-bg",
  INPUT_FIELD_BORDER_COLOR: "--input-field-border",
  CARD_LAYER_1_COLOR: "--card_layer_1",
  CARD_LAYER_2_COLOR: "--card_layer_2",
  CARD_LAYER_3_COLOR: "--card_layer_3",
  CARD_LAYER_4_COLOR: "--card_layer_4",
  CARD_LAYER_5_COLOR: "--card_layer_5",
  VIDEO_AUDIO_TILE_COLOR: "--video-tile",
  VIDEO_AUDIO_TILE_OVERLAY_COLOR: "--video-tile-overlay",
  VIDEO_AUDIO_TILE_TEXT_COLOR: "--video-tile-text",
  VIDEO_AUDIO_TILE_AVATAR_COLOR: "--video-tile-avatar",
  SEMANTIC_ERROR: "--semantic-error",
  SEMANTIC_SUCCESS: "--semantic-success",
  SEMANTIC_WARNING: "--semantic-warning",
  SEMANTIC_NEUTRAL: "--semantic-neutral"
};
function getCurrentTheme() {
  const root = document.documentElement;
  const computed = getComputedStyle(root);
  const theme = {};
  Object.values(CSS_VAR_MAP).forEach((cssVar) => {
    theme[cssVar] = computed.getPropertyValue(cssVar).trim();
  });
  return theme;
}
export {
  AgentVisualizer,
  AudioVisualizer,
  Avatar,
  Button,
  Card,
  CardContent,
  CardTitle,
  Chip,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Conversation,
  ConversationContent,
  ConversationScrollButton,
  ConvoTextStream,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  EMessageEngineMode,
  EMessageStatus,
  HelloWorld,
  IconButton,
  LiveWaveform,
  Message,
  MessageContent,
  MicButton,
  MicButtonWithVisualizer,
  MicSelector,
  PhoneReceiver,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Response,
  ValuePicker,
  buttonVariants,
  cn,
  decodeStreamMessage,
  getCurrentTheme,
  renderMarkdownToHtml,
  useAudioDevices,
  useIsMobile
};
//# sourceMappingURL=index.mjs.map