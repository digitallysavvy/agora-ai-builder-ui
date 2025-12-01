# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

The Agora AI Agent UIKit team takes security seriously. If you discover a security vulnerability, please follow these steps:

### 1. **Do Not** Open a Public Issue

Security vulnerabilities should not be reported through public GitHub issues.

### 2. Report Via Email

Please send security reports to: **[security@agora.io](mailto:security@agora.io)**

Include the following information:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

### 3. Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Varies based on severity

### 4. Disclosure Policy

- We will acknowledge your email within 48 hours
- We will investigate and confirm the vulnerability
- We will develop and test a fix
- We will release a security advisory and patch
- We will credit you for the discovery (unless you prefer to remain anonymous)

## Security Best Practices

When using this library:

1. **Keep Dependencies Updated**: Regularly update to the latest version
2. **Review Permissions**: Be cautious with microphone/audio permissions
3. **Sanitize User Input**: Always sanitize user-provided content
4. **Use HTTPS**: Ensure your application uses HTTPS in production
5. **Content Security Policy**: Implement proper CSP headers

## Security Considerations

### Audio Device Access

This library requests microphone access. Ensure you:

- Inform users why microphone access is needed
- Only request permissions when necessary
- Implement proper error handling for denied permissions

### Third-Party Dependencies

We rely on trusted dependencies including:

- React and React DOM
- Radix UI components
- Tailwind CSS

All dependencies are regularly updated and monitored for security issues.

## Contact

For security concerns or questions, contact the Agora security team at **security@agora.io**.

For general questions and support, use [GitHub Discussions](https://github.com/agora/agora-ai-builder-ui/discussions).
