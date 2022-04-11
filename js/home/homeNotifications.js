const homeNotifications = [
    {
      "level": "alert",
      "message": {
        "body": "White Chevy Van | Feb 2",
        "detail": "Circle K | Feb 2 declined due to incorrect PIN Number.",
        "title": "Potential Mis-use"
      },
      "scope": "account"
    },
    {
      "level": "warn",
      "message": {
        "body": "Transaction Declined",
        "detail": "Circle K | Feb 2 declined due to incorrect PIN Number.",
        "title": "Attention Needed"
      },
      "scope": "transaction"
    },
    {
      "level": "warn",
      "message": {
        "body": "Cards Pending Activation",
        "detail": "Circle K | Feb 2 declined due to incorrect PIN Number.",
        "title": "Attention Needed"
      },
      "scope": "account"
    },
    {
      "level": "alert",
      "message": {
        "body": "Potential Mis-use",
        "detail": "Circle K | Feb 2 declined due to incorrect PIN Number.",
        "title": "Card Used Outside Country"
      },
      "scope": "account"
    }
  ]
export default homeNotifications;  