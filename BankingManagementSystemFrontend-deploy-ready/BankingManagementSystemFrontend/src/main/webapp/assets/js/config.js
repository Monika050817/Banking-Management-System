/**
 * ============================================================
 * BANK MANAGEMENT SYSTEM - SHARED FRONTEND CONFIG
 * ============================================================
 *
 * This is the ONLY file you need to edit when you move from
 * running the project on your own laptop to running it live
 * on your class server. Every other .js file reads its backend
 * URL from window.APP_CONFIG, so nothing else needs to change.
 *
 * IMPORTANT: this file must be loaded (via <script>) BEFORE any
 * other assets/js/*.js file on every page. It has already been
 * added to every .jsp page that needed it.
 */

window.APP_CONFIG = (function () {

    "use strict";

    // ================================================================
    // STEP 1: Choose which environment this build is for.
    //   "local" -> your own machine, backend runs on localhost:8082
    //   "live"  -> deployed on the class/college server
    // ================================================================
    var ENVIRONMENT = "local";

    // ================================================================
    // STEP 2: Fill in the "live" origin once you know it, then set
    // ENVIRONMENT above to "live" before you build the WAR for
    // deployment. Nothing else in this project needs to change.
    //
    // BACKEND_ORIGIN = protocol + host + port + backend context path
    // (no trailing slash). Examples:
    //   "http://myserver.college.edu:8082"
    //   "http://myserver.college.edu:8082/BankingManagementSystemBackend"
    //   "https://mybank.mydomain.com"
    // ================================================================
    var ENVIRONMENTS = {

        local: {
            BACKEND_ORIGIN: "http://localhost:8082"
        },

        live: {
            BACKEND_ORIGIN: "http://REPLACE-WITH-YOUR-SERVER:8082/BankingManagementSystemBackend"
        }
    };

    var BACKEND_ORIGIN = ENVIRONMENTS[ENVIRONMENT].BACKEND_ORIGIN;

    return {
        ENVIRONMENT: ENVIRONMENT,
        BACKEND_ORIGIN: BACKEND_ORIGIN,
        API_BASE_URL: BACKEND_ORIGIN + "/api",
        UPLOADS_BASE_URL: BACKEND_ORIGIN + "/uploads"
    };

})();
