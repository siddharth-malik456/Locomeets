class FirebaseAuthErrorHandler {
  handleFirebaseError(errorCode) {
    switch (errorCode) {
      case "auth/admin-restricted-operation":
        return this.handleAdminRestrictedOperation();
      case "auth/argument-error":
        return this.handleArgumentError();
      case "auth/app-not-authorized":
        return this.handleAppNotAuthorized();
      case "auth/invalid-credential":
        return this.handleInvalidCredential();
      case "auth/email-already-in-use":
        return this.handleEmailAlreadyInUse();
      case "auth/invalid-email":
        return this.handleInvalidEmail();
      case "auth/user-not-found":
        return this.handleUserNotFound();
      case "auth/user-disabled":
        return this.handleUserDisabled();
      case "auth/wrong-password":
        return this.handleWrongPassword();
      case "auth/too-many-requests":
        return this.handleTooManyRequests();

      default:
        return this.handleUnknownError();
    }
  }

  handleAdminRestrictedOperation() {
    return "Admin-restricted operation error occurred";
  }

  handleArgumentError() {
    return "Argument error occurred";
  }

  handleAppNotAuthorized() {
    return "App not authorized error occurred";
  }

  handleInvalidCredential() {
    return "Invalid credential error occurred";
  }

  handleEmailAlreadyInUse() {
    return "Email already in use error occurred";
  }

  handleInvalidEmail() {
    return "Invalid email error occurred";
  }

  handleUserNotFound() {
    return "User not found error occurred";
  }

  handleUserDisabled() {
    return "User disabled error occurred";
  }

  handleWrongPassword() {
    return "Wrong password error occurred";
  }

  handleTooManyRequests() {
    return "Too many requests error occurred";
  }

  // Add more methods for handling other error codes as needed...

  handleUnknownError() {
    return "Unknown error occurred";
  }
}

export default new FirebaseAuthErrorHandler();
