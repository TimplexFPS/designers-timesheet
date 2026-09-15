/* ============================================================
   TIMPLEX — Line Weight
   The ONLY file you have to edit. Everything you paste here comes
   from your own Firebase project; nothing else in the app changes.

   Step 1 — paste the block Firebase gives you (Project settings →
            "Your apps" → the web app → "SDK setup and configuration"
            → Config). Replace the six PASTE_... lines below.
   Step 2 — leave loginDomain as it is unless you decided to use real
            company e-mail addresses (see the guide, "Using real
            e-mail addresses instead").
   Step 3 — adminEmails lists whoever may open the Admin area. Anyone
            not on this list signs in as a designer and only ever
            sees their own calendar and time report.
   ============================================================ */

window.TIMPLEX_CONFIG = {

  firebase: {
    apiKey:            "AIzaSyD-ScFXLOgbrjCuhvPYfLctE0IkTHcJaOI",
    authDomain:        "timplex-designers-timesheet.firebaseapp.com",
    projectId:         "timplex-designers-timesheet",
    storageBucket:     "timplex-designers-timesheet.firebasestorage.app",
    messagingSenderId: "396232235912",
    appId:             "1:396232235912:web:a88b20ae3789bb9113f83d"
  },

  /* People type just their first name at the login screen ("alexandre").
     The app adds this on the end before talking to Firebase, so the
     account you create in the Firebase console must be
     alexandre@timplex.app — see the guide. */
  loginDomain: "timplex.app",

  /* Full e-mail addresses that get the Admin area. Add more inside the
     brackets, separated by commas, if another person needs it later.
     This same list has to be repeated in the security rules — the
     guide shows exactly where. */
  adminEmails: ["elisson@timplex.app"]

};
