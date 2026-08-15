import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  categories: {
    necessary: {
      readOnly: true
    },
    functionality: {},
    analytics: {},
    marketing: {},
  },
  language: {
    default: "pt-br",
    autoDetect: "browser",
    translations: {
      'pt-br': {
        consentModal: {
          title: "Preferências de Consentimento",
          description: "Cookies são usados para aprimorar sua navegação no site.",
          acceptAllBtn: "Aceitar tudo",
          acceptNecessaryBtn: "Rejeitar tudo",
          showPreferencesBtn: "Gerenciar preferêcias",
          footer: "<a href=\"/politica-de-privacidade/\">Política de Privacidade</a>"
        },
        preferencesModal: {
          title: "Preferências de Consentimento",
          acceptAllBtn: "Aceitar tudo",
          acceptNecessaryBtn: "Rejeitar tudo",
          savePreferencesBtn: "Salvar preferências",
          closeIconLabel: "Fechar diálogo",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Uso de cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              title: "Cookies estritamente necessários <span class=\"pm__badge\">Sempre habilitados</span>",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "necessary"
            },
            {
              title: 'Functionality Cookies',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              linkedCategory: 'functionality',
            },
            {
              title: "Analytics Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "analytics"
            },
            {
              title: "Advertisement Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "marketing"
            },
          ]
        }
      }
    }
  }
});
