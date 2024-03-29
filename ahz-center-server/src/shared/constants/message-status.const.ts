export const MessageStatus = {
  User: {
    BAD_REQUEST: `The user data provided is incomplete. Please provide all required fields.`,
    UNAUTHORIZED: `Sorry, you are not authorized to access this resource. Please contact your system administrator for assistance.`,
    OK_CREATE: `User created successfully!`,
    CONFLICT: `The entered email already exists try retrieving the password or entering a different email address`,
    OK: `Users retrieved successfully`,
    NO_CONTENT: (id: number) => `User ${id} has been successfully deleted`,
    NOT_FOUND: `The user you requested does not exist.`,
    RESTORE: (email: string) =>
      `The steps have been correctly sent to the e-mail ${email}`,
    OK_UPDATE: (id: number) => `User ${id} has been successfully updated`,
  },
  UserRole: {
    NOT_FOUND: `The role you requested does not exist.`,
  },
  Auth: {
    SING_IN: (name: string) => `The user ${name} has successfully logged in`,
  },
  Token: {
    UNAUTHORIZED: `Invalid token`,
  },
  RestorePasswordToken: {
    CONFLICT: ``,
  },
  NonUserMentAlzh: {
    OK: `Non-user Ment-Alzh mentorships retrieved successfully`,
    NOT_FOUND: `Non-user Ment-Alzh mentorships not found`,
    BAD_REQUEST: `The non-user Ment-Alzh mentorships data provided is incomplete. Please provide all required fields.`,
    OK_CREATE: `Non-user Ment-Alzh mentorships created successfully!`,
    CONFLICT: `The entered email already exists try retrieving the password or entering a different email address`,
    NO_CONTENT: (id: number) => `Non-user Ment-Alzh mentorships ${id}`,
  },
};
