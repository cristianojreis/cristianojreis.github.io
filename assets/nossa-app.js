"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('nossa-app/adapters/application', ['exports', 'ember', 'ember-data', 'nosso-portal/mixins/autenticacao'], function (exports, _ember, _emberData, _nossoPortalMixinsAutenticacao) {
    var RESTAdapter = _emberData['default'].RESTAdapter;
    var computed = _ember['default'].computed;
    var get = _ember['default'].get;
    exports['default'] = RESTAdapter.extend(_nossoPortalMixinsAutenticacao['default'], {
        namespace: 'api',
        headers: computed('session.session.content.authenticated.access_token', function () {
            var authorizationToken = get(this, 'session.session.content.authenticated.access_token');
            return {
                'Authorization': 'Bearer ' + authorizationToken,
                'AuthorizationDavero': 'dvr-cjr'
            };
        }),
        pathForType: function pathForType(type) {
            var camelized = _ember['default'].String.camelize(type);
            return camelized;
        }
    });
});
define('nossa-app/app', ['exports', 'ember', 'nossa-app/resolver', 'ember-load-initializers', 'nossa-app/config/environment'], function (exports, _ember, _nossaAppResolver, _emberLoadInitializers, _nossaAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _nossaAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _nossaAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _nossaAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _nossaAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('nossa-app/authenticators/oauth2', ['exports', 'nosso-portal/authenticators/oauth2'], function (exports, _nossoPortalAuthenticatorsOauth2) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalAuthenticatorsOauth2['default'];
    }
  });
});
define('nossa-app/components/nosso-barra-esquerda', ['exports', 'nosso-portal/components/nosso-barra-esquerda'], function (exports, _nossoPortalComponentsNossoBarraEsquerda) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoBarraEsquerda['default'];
    }
  });
});
define('nossa-app/components/nosso-barra-topo', ['exports', 'nosso-portal/components/nosso-barra-topo'], function (exports, _nossoPortalComponentsNossoBarraTopo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoBarraTopo['default'];
    }
  });
});
define('nossa-app/components/nosso-conteudo-corpo', ['exports', 'nosso-portal/components/nosso-conteudo-corpo'], function (exports, _nossoPortalComponentsNossoConteudoCorpo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoConteudoCorpo['default'];
    }
  });
});
define('nossa-app/components/nosso-conteudo-titulo', ['exports', 'nosso-portal/components/nosso-conteudo-titulo'], function (exports, _nossoPortalComponentsNossoConteudoTitulo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoConteudoTitulo['default'];
    }
  });
});
define('nossa-app/components/nosso-login', ['exports', 'nosso-portal/components/nosso-login'], function (exports, _nossoPortalComponentsNossoLogin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoLogin['default'];
    }
  });
});
define('nossa-app/components/nosso-portal', ['exports', 'nosso-portal/components/nosso-portal'], function (exports, _nossoPortalComponentsNossoPortal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoPortal['default'];
    }
  });
});
define('nossa-app/components/nosso-topo', ['exports', 'nosso-portal/components/nosso-topo'], function (exports, _nossoPortalComponentsNossoTopo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalComponentsNossoTopo['default'];
    }
  });
});
define('nossa-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('nossa-app/controllers/application', ['exports', 'ember', 'nosso-portal/mixins/autenticacao'], function (exports, _ember, _nossoPortalMixinsAutenticacao) {
    var Controller = _ember['default'].Controller;
    exports['default'] = Controller.extend(_nossoPortalMixinsAutenticacao['default'], {
        desconectar: function desconectar() {
            console.log('Executar logoff.');
        },
        pesquisar: function pesquisar(valor) {
            console.log('Pesquisar por "' + valor + '".');
        }
    });
});
define('nossa-app/helpers/app-version', ['exports', 'ember', 'nossa-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _nossaAppConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _nossaAppConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('nossa-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('nossa-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('nossa-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'nossa-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _nossaAppConfigEnvironment) {
  var _config$APP = _nossaAppConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('nossa-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('nossa-app/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('nossa-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('nossa-app/initializers/ember-simple-auth', ['exports', 'nossa-app/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _nossaAppConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService, _emberSimpleAuthInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _nossaAppConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _nossaAppConfigEnvironment['default'].rootURL || _nossaAppConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionRestoration['default'])(registry);
    }
  };
});
define('nossa-app/initializers/export-application-global', ['exports', 'ember', 'nossa-app/config/environment'], function (exports, _ember, _nossaAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_nossaAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _nossaAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_nossaAppConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('nossa-app/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('nossa-app/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('nossa-app/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("nossa-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('nossa-app/instance-initializers/ember-simple-auth', ['exports'], function (exports) {
  // This is only needed for backwards compatibility and will be removed in the
  // next major release of ember-simple-auth. Unfortunately, there is no way to
  // deprecate this without hooking into Ember's internals…
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize() {}
  };
});
define('nossa-app/mixins/autenticacao', ['exports', 'nosso-portal/mixins/autenticacao'], function (exports, _nossoPortalMixinsAutenticacao) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _nossoPortalMixinsAutenticacao['default'];
    }
  });
});
define('nossa-app/models/usuario', ['exports', 'ember-data'], function (exports, _emberData) {
    var Model = _emberData['default'].Model;
    exports['default'] = Model.extend({
        nome: _emberData['default'].attr(),
        email: _emberData['default'].attr(),
        senha: _emberData['default'].attr(),
        ativo: _emberData['default'].attr(),
        avatar: _emberData['default'].attr()
    });
});
define("nossa-app/nosso-mock/applicationModel", ["exports"], function (exports) {
    exports["default"] = {
        "EstruturaDoPortal": {
            "Logado": true,
            "Topo": {
                "TituloDaAplicacao": "MotelSys",
                "TituloDaAcaoCorrente": "Painel de Controle",
                "ResumoDaAcaoCorrente": "Visão geral do estado atual das suítes.",
                "Busca": {
                    "PlaceHolder": "Pesquisar",
                    "TextoDoBotaoPesquisar": "Pesquisar",
                    "Ativa": true
                },
                "TextoDoBotaoLogoff": "Sair"
            },
            "BarraLateral": {
                "Menu": [{
                    "Titulo": "Painel de Controle",
                    "Acao": undefined,
                    "LinkExterno": undefined,
                    "Menu": undefined,
                    "ClassComplemento": "active"
                }, {
                    "Titulo": "Início",
                    "Acao": undefined,
                    "LinkExterno": undefined,
                    "Menu": [{
                        "Titulo": "Submenu",
                        "Acao": undefined,
                        "LinkExterno": undefined,
                        "Menu": undefined,
                        "ClassComplemento": undefined
                    }],
                    "ClassComplemento": undefined
                }]
            },
            "Conteudo": [],
            "Rodape": {
                "Ativo": false
            }
        }
    };
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/authenticators/oauth2.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/authenticators/oauth2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/authenticators/oauth2.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-barra-esquerda.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-barra-esquerda.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-barra-esquerda.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-barra-topo.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-barra-topo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-barra-topo.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-conteudo-corpo.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-conteudo-corpo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-conteudo-corpo.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-conteudo-titulo.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-conteudo-titulo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-conteudo-titulo.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-login.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-login.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-portal.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-portal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-portal.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/components/nosso-topo.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/components/nosso-topo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/components/nosso-topo.js should pass jshint.');
  });
});
define('nossa-app/nosso-portal/tests/modules/nosso-portal/mixins/autenticacao.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/nosso-portal/mixins/autenticacao.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/nosso-portal/mixins/autenticacao.js should pass jshint.');
  });
});
define('nossa-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('nossa-app/router', ['exports', 'ember', 'nossa-app/config/environment'], function (exports, _ember, _nossaAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _nossaAppConfigEnvironment['default'].locationType,
    rootURL: _nossaAppConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('nossa-app/routes/application', ['exports', 'ember', 'nosso-portal/mixins/autenticacao', 'nossa-app/nosso-mock/applicationModel'], function (exports, _ember, _nossoPortalMixinsAutenticacao, _nossaAppNossoMockApplicationModel) {
    var Route = _ember['default'].Route;
    var get = _ember['default'].get;
    exports['default'] = Route.extend(_nossoPortalMixinsAutenticacao['default'], {
        model: function model() {
            get(this, 'store').findAll('usuario');
            return _nossaAppNossoMockApplicationModel['default'];
        }
    });
});
define('nossa-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('nossa-app/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('nossa-app/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('nossa-app/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("nossa-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hzQ70Ypj", "block": "{\"symbols\":[],\"statements\":[[4,\"nosso-portal\",null,[[\"estrutura\",\"desconectar\",\"pesquisar\",\"class\"],[[20,[\"model\",\"EstruturaDoPortal\"]],[20,[\"desconectar\"]],[20,[\"pesquisar\"]],\"height100\"]],{\"statements\":[[0,\"    \"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "nossa-app/templates/application.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('nossa-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'nossa-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("nossa-app/app")["default"].create({"name":"nossa-app","version":"0.0.0+26def424"});
}

/* jshint ignore:end */
//# sourceMappingURL=nossa-app.map
