function loadLuigi() {
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: "login",
          // label: 'User Last Login : ' + new Date().toLocaleString("en-CA", {timeZone: "IST"}),
          hideFromNav: false,
          children: [
            {
              pathSegment: "auth",
              viewUrl: "/login",
              hideSideNav: false,
              loadingIndicator: {
                enabled: false,
              },
            },
          ],
        },
      ],
    },
    communication: {
      customMessagesListeners: {
        overview: () => {
          data = {
            accessToken:
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp3cy1rZXktcHVibGljLTEifQ.eyJzZXJ2aWNlUmVxdWVzdElkIjoiNzRjZjExODktZGYxNi00ZjkwLTkyY2QtYzY0ZGM2NjIzNWQ2IiwidXNlcl9uYW1lIjoiNzRjZjExODktZGYxNi00ZjkwLTkyY2QtYzY0ZGM2NjIzNWQ2IiwiYXV0aG9yaXphdGlvblByb2ZpbGVDb2RlIjoiTmV0YWRtaW5EZWZhdWx0IiwiaWRlbnRpZmllclZhbHVlIjoibmV0YWRtaW4yNTU4IiwiaWRlbnRpZmllclR5cGUiOiJsb2dpbklkIiwiY2F0ZWdvcnlDb2RlIjoiTldBRE0iLCJ1c2VySWQiOiJVUy44MzQ0MTYxMjc1OTAzODEwOCIsImRldmljZUlkIjoiZGV2aWNlMiIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJjbGllbnRfaWQiOiJkYnhwc3lzYWRtaW4zMDMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwibmFtZSI6InN1cmVzaCBzYWh1IiwiZXhwIjoxNjQ1NTIyMDQ4LCJqdGkiOiI0YjgyNGU5MS1lMWM3LTQ0NzAtYjI1Yi0wNDFkNjk4MWU5ZjQifQ.DeQgKlWRE6R9eXJYIN85fIGJZuQDkbUvTAtOPIKwV7_K05J9DBz8LX0oqL58e_FotRwPghVNfFjxw6gmfF7sIFIrCtmxSuznmLF9LcuhFn7OsSZnVGByGZOQz5eU3gFyLzkVB6cibi-hQOnsYofnSkZN77bKI50qm9tJ1LtU5rmcxpjGOE7JGhQizi3uO8iM-YMvEhBRWmgYSQpFqI-y06tiebSYOfFzrZLnvKWpD7fnDYLXg5Guh2POjACa_eMFcXdBpeirLGBa7fD_RKk7wrd1_Hyql8ztt3j_dMa4xBayVLMkHkFdaJ1Txf4lu-WTttUgusfnWYJDe9hWJFRFvA",
            accessTokenExpirationDate: new Date(),
            idToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTAwNzUzMjEsImV4cCI6MTY0MTYxMTMyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IlN0ZXZlIiwiU3VybmFtZSI6IlJvZ2VyIiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.T2DjDlQLYNBac26WQfh7vtBkAax8RtQwkSG4VtXSjB0",
            scope: "email profile",
          };
          console.log("Luigi.auth().isAuthorizationEnabled()" + Luigi.auth().isAuthorizationEnabled());
          Luigi.auth().store.setAuthData(data);
          Luigi.auth().handleAuthEvent(
            'onAuthSuccessful',
            '',
            '',
            ''
          );
        /*  Luigi.auth().handleAuthEvent(
            "onAuthSuccessful",
            "res.myProviderConfig",
            data,
            "/luigi#/home"
          );*/

          //Luigi.auth().store.setNewlyAuthorized();
          Luigi.auth().login();
        },
      },
    },
    auth: {
      storage: "sessionStorage",
      disableAutoLogin: false,
      events: {
        onAuthSuccessful: (settings, authData) => {
          console.log(settings);
          loadLuigiPostLogin("Steve Roger", "a@a.com");
        },
        onAuthError: (settings, err) => {
          console.log("onAuthError");
        },
        onAuthExpired: (settings) => {},
        onLogout: (settings) => {
          console.log("logout event..");
        },
        onAuthExpireSoon: (settings) => {},
        onAuthConfigError: (settings, err) => {
          console.log("onAuthConfigError");
        },
      },
    },
    routing: {
      /**
       * Development:
       * For path routing, set to false
       * For hash routing, set to true
       */
      useHashRouting: true,
    },
    settings: {
      hideNavigation: true,
      /*header: {
        title: 'Luigi JavaScript',
      },*/
    },
  });
}

setSessionStorage = () => {
  sessionStorage.setItem("PRICING_ENGINE",
    '[{"code":"SHULKA_ACCESS","name":"Access to Shulka Module","gatewayTypes":["WEB"],"attributes":[]},{"code":"APPROVE_PRICING_POLICY","name":"Pricing policy approval","gatewayTypes":["WEB"],"attributes":[]},{"code":"CALCULATE_CHARGES","name":"View Shulka Calculator","gatewayTypes":["WEB"],"attributes":[]}] ');
  sessionStorage.setItem("USSD_MENU_MANAGER",
    '[{"code":"MENU_CREATOR","name":"Menu Creator","gatewayTypes":["WEB"],"attributes":[]},{"code":"MENU_APPROVER","name":"Menu Approver","gatewayTypes":["WEB"],"attributes":[]}]');

}

loadLuigiPostLogin = (name, email) => {
  //Luigi.ux().showAlert("successfully login");

  console.log(Luigi.getConfig());
  setSessionStorage();


  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: "home",
          label:
            "User Last Login : " +
            new Date().toLocaleString("en-CA", { timeZone: "IST" }),
          hideFromNav: false,
          children: [
            {
              pathSegment: "overview",
              label: "Overview",
              icon: "home",
              testId: "overview-testid",
              viewUrl: "/overview",
              loadingIndicator: {
                enabled: false,
              },
              context: {
                title: "Welcome to Luigi POC!",
                content: "Play around with your Luigi configuration Here",
                myMessage: "Somnath is testing here !",
                lang: "en",
                actionUrl: "CoreWeb/test.html",
              },
            },
            {
              pathSegment: "mmSearch",
              label: "Search/Create Menu",
              testId: "mmSearch-testid",
              category: {
                label: "Menu Management",
                icon: "product",
                collapsible: true,
              },
              context: {
                actionUrl: "/MenuManagementUI/jsp/searchPage.jsp",
              },
              hideSideNav: true,
              viewUrl: "http://localhost/MenuManagementUI/index.jsp",
            },
            {
              pathSegment: "shulka",
              label: "Pricing Engine",
              loadingIndicator: {
                enabled: false,
              },
              context: {
                actionUrl: "/shulka/serviceChargePolicy",
              },
              hideSideNav: true,
              viewUrl: "http://localhost/shulka/index.jsp",
            },
            {
              pathSegment: "channel",
              label: "Add Channel User",
              category: {
                label: "Channel User Management",
                icon: "account",
                collapsible: true,
              },
              loadingIndicator: {
                enabled: false,
              },
              viewUrl:
                "http://localhost:8080/CoreWeb/channel/add1_addChannelUser.action",
            },
            {
              pathSegment: "preference",
              label: "Commission withdrawal",
              category: {
                label: "Test Zone",
                icon: "customize",
                collapsible: true,
              },
              loadingIndicator: {
                enabled: false,
              },
              viewUrl:
                "http://localhost/CoreWeb/commission/commissionDisbursementAction_input.action?ORIGIN=LUIGI&language=en&pageCode=COMMDISINITIATE&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp3cy1rZXktcHVibGljLTEifQ.eyJzZXJ2aWNlUmVxdWVzdElkIjoiNzRjZjExODktZGYxNi00ZjkwLTkyY2QtYzY0ZGM2NjIzNWQ2IiwidXNlcl9uYW1lIjoiNzRjZjExODktZGYxNi00ZjkwLTkyY2QtYzY0ZGM2NjIzNWQ2IiwiYXV0aG9yaXphdGlvblByb2ZpbGVDb2RlIjoiTmV0YWRtaW5EZWZhdWx0IiwiaWRlbnRpZmllclZhbHVlIjoibmV0YWRtaW4yNTU4IiwiaWRlbnRpZmllclR5cGUiOiJsb2dpbklkIiwiY2F0ZWdvcnlDb2RlIjoiTldBRE0iLCJ1c2VySWQiOiJVUy44MzQ0MTYxMjc1OTAzODEwOCIsImRldmljZUlkIjoiZGV2aWNlMiIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJjbGllbnRfaWQiOiJkYnhwc3lzYWRtaW4zMDMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwibmFtZSI6InN1cmVzaCBzYWh1IiwiZXhwIjoxNjQ1NTIyMDQ4LCJqdGkiOiI0YjgyNGU5MS1lMWM3LTQ0NzAtYjI1Yi0wNDFkNjk4MWU5ZjQifQ.DeQgKlWRE6R9eXJYIN85fIGJZuQDkbUvTAtOPIKwV7_K05J9DBz8LX0oqL58e_FotRwPghVNfFjxw6gmfF7sIFIrCtmxSuznmLF9LcuhFn7OsSZnVGByGZOQz5eU3gFyLzkVB6cibi-hQOnsYofnSkZN77bKI50qm9tJ1LtU5rmcxpjGOE7JGhQizi3uO8iM-YMvEhBRWmgYSQpFqI-y06tiebSYOfFzrZLnvKWpD7fnDYLXg5Guh2POjACa_eMFcXdBpeirLGBa7fD_RKk7wrd1_Hyql8ztt3j_dMa4xBayVLMkHkFdaJ1Txf4lu-WTttUgusfnWYJDe9hWJFRFvA",
            },
            {
              pathSegment: "stock",
              label: "Stock Initiate",
              category: {
                label: "Stock Management",
                icon: "product",
                collapsible: true,
              },
              loadingIndicator: {
                enabled: false,
              },
              viewUrl:
                "http://localhost:8080/CoreWeb/stock/stockInit_input.action",
            },

            {
              pathSegment: "mmApprove",
              label: "Approve Menu",
              testId: "mmApprove-testid",
              category: {
                label: "Menu Management",
              },
              context: {
                actionUrl: "/MenuManagementUI/jsp/checkerPage.jsp",
              },
              hideSideNav: true,
              viewUrl: "http://localhost/MenuManagementUI/index.jsp",
            },
            {
              pathSegment: "authorization",
              label: "User Auth",
              category: {
                label: "User Authorization",
                icon: "product",
                collapsible: true,
              },
              context: {
                actionUrl: "CoreWeb/stock/stockInit_input.action",
              },
              viewUrl: "http://localhost:8080", // window.location.origin + '/CoreWeb/index.action'
            },
            {
              pathSegment: "authorization",
              label: "User Auth 2",
              category: {
                label: "User Authorization",
                icon: "product",
                collapsible: true,
              },
              context: {
                actionUrl: "CoreWeb/stock/stockInit_input.action",
              },
              viewUrl: "http://localhost:8080", // window.location.origin + '/CoreWeb/index.action'
            },
            {
              pathSegment: "authzService",
              label: "Auth Service",
              category: {
                label: "Authorization Service",
                icon: "product",
                collapsible: true,
              },
              loadingIndicator: {
                enabled: false,
              },
              viewUrl:
                "https://authz-service.netlify.app/authorization-service", // window.location.origin + '/CoreWeb/index.action'
            },
          ],
        },
      ],

      profile: {
        logout: {
          label: "Logout",
          customLogoutFn: () => {
            console.log("logout >>>" + Luigi.auth().isAuthorizationEnabled());
            Luigi.auth().logout();
          },
        },
        /*staticUserInfoFn: () => {
          return {'name': name, 'email': email, 'picture': '/assets/image/ca.jpg'};
        },*/
      },
    },
    routing: {
      /**
       * Development:
       * For path routing, set to false
       * For hash routing, set to true
       */
      useHashRouting: true,
    },
    settings: {
      header: {
        //title: 'User Last Login : ' + new Date().toLocaleString("en-CA", {timeZone: "IST"}),
        logo: "/assets/image/logo.png",
        //favicon: '/favicon.ico'
      },
    },
  });
};
