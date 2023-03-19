export const MessageStatus = {
    User: {
        BAD_REQUEST: `The user data provided is incomplete. Please provide all required fields.`,
        UNAUTHORIZED: `Sorry, you are not authorized to access this resource. Please contact your system administrator for assistance.`,
        OK_CREATE: `User created successfully!`,
        CONFLICT: `The entered email already exists try retrieving the password or entering a different email address`,
        OK: `Users retrieved successfully`,
        NO_CONTENT: (id: number) => `User ${id} has been successfully deleted`,
        NOT_FOUND: `The user you requested does not exist.`
    },
    UserRole: {
        NOT_FOUND: `The role you requested does not exist.`
    },
    Auth: {
        SING_IN: (name: string) =>  `The user ${name} has successfully logged in` 
    },
    Token: {
        UNAUTHORIZED: `Invalid token`
    }
}