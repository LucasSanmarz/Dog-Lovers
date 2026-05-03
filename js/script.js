// Sanitize user input if handling any
function sanitizeInput(input) {
    return input.replace(/<script[^>]*?>.*?<\/script>/gi, '');
}
