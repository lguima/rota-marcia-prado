import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    }
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {
      services: {
        theme: {
          label: 'Preferência de tema (claro/escuro)'
        },
        youtube: {
          label: 'Vídeos do YouTube',
        },
        googlemaps: {
          label: 'Mapas do Google',
        },
        embeds: {
          label: 'Conteúdo incorporado de terceiros',
        },
      },
    },
    analytics: {
      services: {
        google_analytics: {
          label: 'Google Analytics 4'
        },
      },
    },
  },
  language: {
    default: "pt-br",
    autoDetect: "browser",
    translations: {
      'pt-br': {
        consentModal: {
          title: 'Cookies e tecnologias semelhantes',
          description:
            'Utilizamos cookies e outras tecnologias semelhantes para lembrar suas preferências e entender como o site é utilizado. Você pode aceitar, recusar ou escolher quais categorias deseja permitir.',
          acceptAllBtn: 'Aceitar tudo',
          acceptNecessaryBtn: 'Recusar opcionais',
          showPreferencesBtn: 'Gerenciar preferências',
          footer:
            '<a href="/politica-de-privacidade/">Política de Privacidade</a> · <a href="/termos-de-uso/">Termos de Uso</a>'
        },

        preferencesModal: {
          title: 'Preferências de cookies',
          acceptAllBtn: 'Aceitar tudo',
          acceptNecessaryBtn: 'Recusar opcionais',
          savePreferencesBtn: 'Salvar preferências',
          closeIconLabel: 'Fechar',
          serviceCounterLabel: 'Serviços',
          sections: [
            {
              title: 'Como usamos cookies e tecnologias semelhantes',
              description:
                'O Rota Márcia Prado é um projeto voluntário e sem fins comerciais. Utilizamos apenas as tecnologias necessárias para o funcionamento do site, recursos opcionais de conveniência e análises de acesso quando autorizadas.'
            },
            {
              title: 'Necessários',
              description:
                'Esses recursos são essenciais para o funcionamento do site e para armazenar sua escolha de consentimento. Eles permanecem sempre ativos.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Funcionais',
              description:
                'Permitem lembrar preferências e carregar recursos opcionais como vídeos e mapas incorporados.',
              linkedCategory: 'functionality'
            },
            {
              title: 'Analíticos',
              description:
                'Nos ajudam a entender como o site é utilizado para melhorar seu conteúdo e desempenho. Esses recursos são ativados apenas com sua autorização.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Mais informações',
              description:
                'Para mais detalhes, confira a nossa <a href="/politica-de-privacidade/">Política de Privacidade</a> e os nossos <a href="/termos-e-condicoes/">Termos e Condições de Uso</a>.'
            }
          ]
        }
      }
    }
  }
});
