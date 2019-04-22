(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/theIntelligentInvestor.c54f98a0.jpeg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/CollegePhysics.cdeb5759.jpeg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/CollegeAlgebra.f2689056.jpeg';
    },
    ,
    ,
    ,
    ,
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(24),
        r = a(25);
      t.default = [
        { path: '/about', exact: !0, component: n.default },
        { path: '/about/:person', exact: !0, component: r.default }
      ];
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(7),
        o = a(5),
        i = a(4),
        c = a(6),
        l = a(0),
        s = a.n(l),
        m = a(73),
        u = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'render',
                value: function() {
                  return s.a.createElement(
                    'div',
                    null,
                    s.a.createElement('div', null, 'Placeholder About Page'),
                    s.a.createElement('br', null),
                    s.a.createElement(
                      m.a,
                      { to: '/' },
                      s.a.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-info' },
                        'Home Page'
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.Component);
      t.default = u;
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(7),
        o = a(5),
        i = a(4),
        c = a(6),
        l = a(0),
        s = a.n(l),
        m = a(124),
        u = a(73),
        d = (function(e) {
          function t(e) {
            var r;
            Object(n.a)(this, t),
              (r = Object(o.a)(this, Object(i.a)(t).call(this, e)));
            var c = e.match.params.person;
            try {
              r.state = { profile: a(53)('./' + c) };
            } catch (l) {
              r.state = { fail: !0 };
            }
            return r;
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'render',
                value: function() {
                  return this.state.fail
                    ? s.a.createElement(m.a, {
                        to: ''.concat(window.location.pathname, '/404')
                      })
                    : s.a.createElement(
                        'div',
                        null,
                        s.a.createElement(
                          'div',
                          { className: 'container' },
                          s.a.createElement(
                            u.a,
                            { to: '/' },
                            s.a.createElement(
                              'button',
                              { type: 'button', className: 'btn btn-info' },
                              'Home Page'
                            )
                          )
                        ),
                        s.a.createElement(
                          'div',
                          { className: 'container' },
                          s.a.createElement(
                            'div',
                            { className: 'row mt-3' },
                            s.a.createElement(
                              'div',
                              { className: 'col-3 text-center' },
                              s.a.createElement('img', {
                                src: a(53)(
                                  './'.concat(this.state.profile.picture)
                                ),
                                className: 'img-fluid',
                                alt: 'fluid'
                              }),
                              s.a.createElement('br', null),
                              s.a.createElement(
                                'h3',
                                null,
                                this.state.profile.name
                              ),
                              s.a.createElement(
                                'h4',
                                null,
                                this.state.profile.role
                              ),
                              s.a.createElement('br', null),
                              s.a.createElement(
                                'h6',
                                null,
                                s.a.createElement(
                                  'span',
                                  { role: 'img', 'aria-label': 'emoji' },
                                  '\ud83d\udce7'
                                ),
                                ' ',
                                this.state.profile.email
                              ),
                              s.a.createElement(
                                'h6',
                                null,
                                s.a.createElement(
                                  'span',
                                  { role: 'img', 'aria-label': 'emoji' },
                                  '\ud83c\udf10'
                                ),
                                ' ',
                                s.a.createElement(
                                  'a',
                                  { href: this.state.profile.website },
                                  this.state.profile.website
                                )
                              )
                            ),
                            s.a.createElement(
                              'div',
                              { className: 'col' },
                              s.a.createElement(
                                'p',
                                { className: 'lead h5' },
                                this.state.profile.description
                              )
                            )
                          )
                        )
                      );
                }
              }
            ]),
            t
          );
        })(l.Component);
      t.default = d;
    },
    ,
    function(e, t) {
      var a = '';
      Object({ NODE_ENV: 'production', PUBLIC_URL: '' })
        .REACT_APP_LOCAL_SERVER && (a = 'http://localhost:3000'),
        (e.exports = a);
    },
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/Socrates.23fe2d51.jpeg';
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/logo.e391515f.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/star-outline.7f10b596.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/star-outline-filled.253379f4.svg';
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      var n = {
        './About': 24,
        './About.js': 24,
        './AboutPerson': 25,
        './AboutPerson.js': 25,
        './Edwin Menjivar': 54,
        './Edwin Menjivar.json': 54,
        './Jesus Garnica': 55,
        './Jesus Garnica.json': 55,
        './John Mendoza': 56,
        './John Mendoza.json': 56,
        './Leonid Grekhov': 57,
        './Leonid Grekhov.json': 57,
        './Michael Winata': 58,
        './Michael Winata.json': 58,
        './Vismay Patel': 59,
        './Vismay Patel.json': 59,
        './VismayPatel.jpg': 116,
        './alpha.png': 117,
        './jesusGarnica.png': 118,
        './john.png': 119,
        './members': 60,
        './members.js': 60,
        './michael winata.jpg': 120,
        './route': 23,
        './route.js': 23
      };
      function r(e) {
        var t = o(e);
        return a(t);
      }
      function o(e) {
        var t = n[e];
        if (!(t + 1)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        return t;
      }
      (r.keys = function() {
        return Object.keys(n);
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 53);
    },
    function(e) {
      e.exports = {
        name: 'Edwin Menjivar',
        role: 'Git Master',
        picture: 'alpha.png',
        email: 'emen15@mail.sfsu.edu',
        website: 'none',
        description:
          'San Francisco State University Undergraduate senior, majoring in Computer Science and graduating in the Fall 2019. Mobile app developer is one of my passions, and I also love all kinds of sports.'
      };
    },
    function(e) {
      e.exports = {
        name: 'Jesus Garnica',
        role: 'Front End Lead',
        picture: 'jesusGarnica.png',
        email: 'jgarnica1@mail.sfsu.edu',
        website: 'none',
        description:
          'I am a student at San Francisco State University majoring in Computer Science. Most of my skills lie in front end work and app design. I primarily program in Java, Swift, and Python. I also however have a passion for investing and finance. '
      };
    },
    function(e) {
      e.exports = {
        name: 'John Mendoza',
        role: 'Backend-Lead',
        picture: 'john.png',
        email: 'jmendo.1024@gmail.com',
        website: 'https://github.com/Jmendo12',
        description:
          'My name is John Mendoza, and I am a senior Computer Science Major at San Francisco State University. I will be graduating in May of 2019. My interests in Computer Science include machine learning, data structures and algorithms, software security, and back-end development. Some of my hobbies outside of Computer Science are hiking, music, and baseball.'
      };
    },
    function(e) {
      e.exports = {
        name: 'Leonid Grekhov',
        role: 'front-end engineer',
        picture: 'alpha.png',
        email: 'lgrekhov@mail.sfsu.edu',
        website: 'none',
        description:
          "I'm a senior student, majoring in computer science at SFSU."
      };
    },
    function(e) {
      e.exports = {
        name: 'Michael Winata',
        role: 'front-end engineer',
        picture: 'michael winata.jpg',
        email: 'mwinata@mail.sfsu.edu',
        website: 'https://mwinata94.github.io/',
        description:
          "I'm a senior student, majoring in computer science at SFSU."
      };
    },
    function(e) {
      e.exports = {
        name: 'Vismay Patel',
        role: 'Team Lead',
        picture: 'VismayPatel.jpg',
        email: 'vpatel3@mail.sfsu.edu',
        website: 'none',
        description:
          'I am a graduate student, studying computer science at San Francisco State University.'
      };
    },
    function(e, t, a) {
      'use strict';
      a.r(t),
        (t.default = [
          'Vismay Patel',
          'John Mendoza',
          'Jesus Garnica',
          'Edwin Menjivar',
          'Leonid Grekhov',
          'Michael Winata'
        ]);
    },
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/money_icon.63b405cd.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/book_icon.baaa27c7.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/chat_icon.cdf858b8.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/map_icon.e49b07f0.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/thumbs_up.945f1fe5.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/shield_icon.a7860448.svg';
    },
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/shoppingCart.b6859808.svg';
    },
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = a(123);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t) {},
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/VismayPatel.ca873b4c.jpg';
    },
    function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAKCAYAAAD2Fg1xAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIZACEgvCS90gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAJElEQVQ4y2P8//8/w3AATAzDBIx6ZNQjox4Z9cioR0Y9QgkAAMgvAxGVrXxcAAAAAElFTkSuQmCC';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/jesusGarnica.dea2646d.png';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/john.21e912b7.png';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/michael winata.335ac4a1.jpg';
    },
    ,
    function(e, t, a) {},
    function(e, t, a) {
      'use strict';
      a.r(t);
      a(75);
      var n = a(36),
        r = a.n(n),
        o = a(61),
        i = (a(76), a(77), a(0)),
        c = a.n(i),
        l = a(62),
        s = a.n(l),
        m = a(127),
        u = a(72),
        d = a(10),
        p = a(3),
        g = a(7),
        b = a(5),
        h = a(4),
        f = a(6),
        v = [
          {
            component: (function(e) {
              function t() {
                return (
                  Object(p.a)(this, t),
                  Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
                );
              }
              return (
                Object(f.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return c.a.createElement('div', null, '404');
                    }
                  }
                ]),
                t
              );
            })(i.Component)
          }
        ],
        E = a(2),
        y = (a(82), a(63)),
        N = a.n(y),
        j = a(64),
        w = a.n(j),
        O = a(65),
        k = a.n(O),
        S = a(66),
        C = a.n(S),
        x = a(67),
        A = a.n(x),
        B = a(68),
        L = a.n(B),
        R = a(26),
        P = a(69),
        M = a.n(P),
        D = a(27),
        F = a.n(D),
        I = (M.a.connect(F.a),
        function(e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'post';
          return fetch(
            (function(e) {
              return ''.concat(F.a, '/api').concat(e);
            })(e),
            (function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = {
                  method: arguments.length > 1 ? arguments[1] : void 0,
                  credentials: 'include',
                  headers: { 'Content-Type': 'application/json' }
                };
              return (
                Object.keys(e).length > 0 && (t.body = JSON.stringify(e)), t
              );
            })(t, a)
          );
        }),
        T = function(e) {
          return e.json();
        },
        U = {
          getLogin: function() {
            return I('/login', {}, 'get');
          },
          getRegister: function() {
            return I('/register', {}, 'get');
          },
          postLogin: function(e, t) {
            return I('/login', { email: e, password: t }).then(T);
          },
          postLogout: function() {
            return I('/logout', {});
          },
          postRegister: function(e, t, a, n) {
            return I('/register', {
              firstname: e,
              lastname: t,
              email: a,
              password: n
            });
          }
        },
        H = {
          getSearchByAuthor: function(e, t) {
            return I(
              '/search/author/'.concat(e, '/page/').concat(t),
              {},
              'get'
            );
          },
          getSearchByIsbn: function(e, t) {
            return I('/search/isbn/'.concat(e, '/page/').concat(t), {}, 'get');
          },
          getSearchByTitle: function(e, t) {
            return I('/search/title/'.concat(e, '/page/').concat(t), {}, 'get');
          }
        },
        J = {
          getUserProfile: function(e) {
            return I('/user/'.concat(e), {}, 'get');
          }
        },
        G = a(37),
        q = a.n(G),
        Q = (a(111), a(70)),
        V = a.n(Q),
        W = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).componentDidMount = function() {
                U.getLogin().then(function(e) {
                  e.ok &&
                    e.text().then(function(e) {
                      (e = JSON.parse(e)).firstname &&
                        a.setState({ user: { firstname: e.firstname } });
                    });
                });
              }),
              (a.onChange = function(e) {
                a.setState(Object(R.a)({}, e.target.name, e.target.value));
              }),
              (a.onLogin = function(e) {
                e.preventDefault(),
                  U.postLogin(a.state.email, a.state.password).then(function(
                    e
                  ) {
                    e.firstname &&
                      a.setState({ user: { firstname: e.firstname } });
                  });
              }),
              (a.onRegister = function(e) {
                e.preventDefault(), (window.location = '/register');
              }),
              (a.onSearch = function(e) {
                e.preventDefault(),
                  '' !== a.state.query &&
                    (window.location = '/search/'
                      .concat(a.state.category, '/')
                      .concat(a.state.query, '/page/1'));
              }),
              (a.onSignOut = function(e) {
                e.preventDefault(),
                  U.postLogout().then(function(e) {
                    return a.setState({ user: null });
                  });
              }),
              (a.render = function() {
                var e = c.a.createElement(
                    'form',
                    {
                      className: 'form-inline flex-fill mr-2',
                      onSubmit: a.onSearch
                    },
                    c.a.createElement(
                      'div',
                      {
                        className: 'input-group flex-fill',
                        onSubmit: a.onSearch
                      },
                      c.a.createElement(
                        'div',
                        {
                          className: 'input-group-prepend',
                          onSubmit: a.onSearch
                        },
                        c.a.createElement(
                          'select',
                          {
                            id: 'categorySelect',
                            className:
                              'form-control bg-warning text-dark border-warning',
                            name: 'category',
                            value: a.state.category,
                            onChange: a.onChange,
                            style: {
                              boxShadow: '0 0 0 0.2rem rgba(132, 0, 255, 0)'
                            }
                          },
                          c.a.createElement('option', null, 'title'),
                          c.a.createElement('option', null, 'author'),
                          c.a.createElement('option', null, 'isbn')
                        )
                      ),
                      c.a.createElement('input', {
                        type: 'text',
                        className: 'form-control',
                        placeholder: 'what are the books you are looking for?',
                        name: 'query',
                        value: a.state.query,
                        onChange: a.onChange,
                        style: {
                          boxShadow: '0 0 0 0.2rem rgba(132, 0, 255, 0)'
                        },
                        onSubmit: a.onSearch
                      }),
                      c.a.createElement(
                        'div',
                        { className: 'input-group-append' },
                        c.a.createElement(
                          'button',
                          {
                            className: 'btn btn-success',
                            type: 'button',
                            style: {
                              boxShadow: '0 0 0 0.2rem rgba(132, 0, 255, 0)'
                            },
                            onClick: a.onSearch,
                            onSubmit: a.onSearch
                          },
                          'Search'
                        )
                      )
                    )
                  ),
                  t = c.a.createElement(
                    'div',
                    { className: 'dropdown' },
                    c.a.createElement(
                      'button',
                      {
                        variant: 'primary',
                        id: 'LoginButton',
                        className:
                          'btn btn-outline-primary mr-2 my-2 my-sm-0 dropdown-toggle',
                        type: 'button',
                        'data-toggle': 'dropdown',
                        'aria-haspopup': 'true',
                        'aria-expanded': 'false'
                      },
                      'Login'
                    ),
                    c.a.createElement(
                      'div',
                      {
                        className: 'dropdown-menu',
                        'aria-labelledby': 'LoginButton'
                      },
                      c.a.createElement(
                        'div',
                        { className: 'container' },
                        c.a.createElement(
                          'div',
                          { className: 'form-group' },
                          c.a.createElement('input', {
                            type: 'text',
                            name: 'email',
                            placeholder: '  email',
                            value: a.state.email,
                            onChange: a.onChange,
                            style: { marginBottom: '1em' }
                          })
                        ),
                        c.a.createElement(
                          'div',
                          { className: 'form-group' },
                          c.a.createElement('input', {
                            type: 'password',
                            name: 'password',
                            placeholder: '  password',
                            value: a.state.password,
                            onChange: a.onChange,
                            style: { marginBottom: '1em' }
                          })
                        ),
                        c.a.createElement(
                          'div',
                          { className: 'form-group' },
                          c.a.createElement(
                            'button',
                            {
                              className: 'btn btn-block btn-outline-primary',
                              type: 'submit',
                              onClick: a.onLogin
                            },
                            'Login'
                          )
                        )
                      )
                    )
                  ),
                  n = c.a.createElement(
                    'button',
                    {
                      variant: 'primary',
                      id: 'LoginButton',
                      className: 'btn btn-primary ml-2 my-2 mr-2 my-sm-0',
                      type: 'submit',
                      onClick: a.onSignOut
                    },
                    'Sign Out'
                  ),
                  r = c.a.createElement(
                    'button',
                    {
                      variant: 'primary',
                      id: 'SignUpButton',
                      className: 'btn btn-primary my-2 mr-2 my-sm-0',
                      type: 'submit',
                      onClick: a.onRegister
                    },
                    'Sign Up'
                  ),
                  o = c.a.createElement('img', {
                    src: V.a,
                    className: 'mr-2',
                    height: '30',
                    width: '30',
                    alt: 'banner'
                  }),
                  i = c.a.createElement(
                    'button',
                    {
                      variant: 'primary',
                      id: 'cartDiv',
                      className: 'btn btn-primary my-2 mr-2 my-sm-0',
                      type: 'submit'
                    },
                    ' ',
                    '0'
                  );
                return a.state.user
                  ? c.a.createElement(
                      'nav',
                      {
                        className: 'navbar navbar-expand-lg navbar-dark bg-dark'
                      },
                      c.a.createElement(
                        'a',
                        { className: 'navbar-brand', href: '/' },
                        c.a.createElement('img', {
                          src: q.a,
                          height: '28',
                          alt: 'banner'
                        }),
                        '  ',
                        ' ListLister'
                      ),
                      c.a.createElement(
                        'button',
                        {
                          className: 'navbar-toggler',
                          type: 'button',
                          'data-toggle': 'collapse',
                          'data-target': '#navbarSupportedContent',
                          'aria-controls': 'navbarSupportedContent',
                          'aria-expanded': 'false',
                          'aria-label': 'Toggle navigation'
                        },
                        c.a.createElement('span', {
                          className: 'navbar-toggler-icon'
                        })
                      ),
                      c.a.createElement(
                        'div',
                        {
                          className: 'collapse navbar-collapse',
                          id: 'navbarSupportedContent'
                        },
                        c.a.createElement('ul', {
                          className: 'navbar-nav mr-auto'
                        }),
                        e,
                        c.a.createElement(
                          'form',
                          { className: 'form-inline my-2 my-lg-0' },
                          c.a.createElement(
                            'div',
                            { className: 'text-light' },
                            'Hi, ',
                            a.state.user.firstname
                          ),
                          n,
                          o,
                          i
                        )
                      )
                    )
                  : c.a.createElement(
                      'nav',
                      {
                        className: 'navbar navbar-expand-lg navbar-dark bg-dark'
                      },
                      c.a.createElement(
                        'a',
                        { className: 'navbar-brand', href: '/' },
                        c.a.createElement('img', {
                          src: q.a,
                          height: '28',
                          alt: 'banner'
                        }),
                        '  ',
                        ' ListLister'
                      ),
                      c.a.createElement(
                        'button',
                        {
                          className: 'navbar-toggler',
                          type: 'button',
                          'data-toggle': 'collapse',
                          'data-target': '#navbarSupportedContent',
                          'aria-controls': 'navbarSupportedContent',
                          'aria-expanded': 'false',
                          'aria-label': 'Toggle navigation'
                        },
                        c.a.createElement('span', {
                          className: 'navbar-toggler-icon'
                        })
                      ),
                      c.a.createElement(
                        'div',
                        {
                          className: 'collapse navbar-collapse',
                          id: 'navbarSupportedContent'
                        },
                        c.a.createElement('ul', { className: 'navbar-nav' }),
                        e,
                        c.a.createElement(
                          'form',
                          { className: 'form-inline my-2 my-lg-0' },
                          t,
                          r,
                          o,
                          i
                        )
                      )
                    );
              }),
              (a.state = {
                user: null,
                email: '',
                password: '',
                query: '',
                category: 'title'
              }),
              a.props.category &&
                ((a.state.category = a.props.category),
                (a.state.query = a.props.query)),
              (a.onChange = a.onChange.bind(Object(E.a)(Object(E.a)(a)))),
              (a.onLogin = a.onLogin.bind(Object(E.a)(Object(E.a)(a)))),
              (a.onRegister = a.onRegister.bind(Object(E.a)(Object(E.a)(a)))),
              (a.onSearch = a.onSearch.bind(Object(E.a)(Object(E.a)(a)))),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(i.Component),
        _ = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  return c.a.createElement('div', null);
                }
              }
            ]),
            t
          );
        })(i.Component),
        z = (a(112),
        {
          data: [
            {
              departmentName: 'College of Business',
              departmentCollege: [
                { collegeQuery: 'acctg', collegeName: 'Accounting Department' },
                {
                  collegeQuery: 'buslab',
                  collegeName: 'Business Computer Lab'
                },
                { collegeQuery: 'econ', collegeName: 'Economics Department' }
              ]
            },
            {
              departmentName: 'College of Science and Engineering',
              departmentCollege: [
                { collegeQuery: 'biology', collegeName: 'Biology Department' },
                {
                  collegeQuery: 'cs',
                  collegeName: 'Department of Computer Science'
                },
                {
                  collegeQuery: 'statmath',
                  collegeName: 'Mathematics Department'
                }
              ]
            }
          ]
        }),
        X = (function(e) {
          function t() {
            var e, a;
            Object(p.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).onSearchMacro = function(e) {
                return (window.location = '/search/'.concat(
                  e.target.name,
                  '/page/1'
                ));
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return c.a.createElement(
                    'nav',
                    { id: 'sidebar', style: { minHeight: '100%' } },
                    c.a.createElement(
                      'div',
                      { className: 'sidebar-header' },
                      c.a.createElement(
                        'h3',
                        null,
                        'San Francisco State University'
                      )
                    ),
                    c.a.createElement(
                      'ul',
                      { className: 'list-unstyled components' },
                      c.a.createElement('p', null, 'Deparments'),
                      z.data.map(function(t, a) {
                        return c.a.createElement(
                          'li',
                          { key: a },
                          c.a.createElement(
                            'a',
                            {
                              href: '#'.concat(
                                t.departmentName.replace(/\s+/g, '-'),
                                'Submenu'
                              ),
                              'data-toggle': 'collapse',
                              'aria-expanded': 'false',
                              className: 'dropdown-toggle',
                              style: { fontSize: '0.85vw' }
                            },
                            t.departmentName
                          ),
                          c.a.createElement(
                            'ul',
                            {
                              className: 'collapse list-unstyled',
                              id: ''.concat(
                                t.departmentName.replace(/\s+/g, '-'),
                                'Submenu'
                              )
                            },
                            t.departmentCollege.map(function(t, a) {
                              return c.a.createElement(
                                'li',
                                { key: a },
                                c.a.createElement(
                                  'a',
                                  {
                                    onClick: e.onSearchMacro,
                                    name: t.collegeQuery,
                                    href: '# '
                                  },
                                  t.collegeName
                                )
                              );
                            })
                          )
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.Component),
        Y = (function(e) {
          function t() {
            var e, a;
            Object(p.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).render = function() {
                return c.a.createElement(
                  'div',
                  { className: 'container', style: { minHeight: '80vh' } },
                  c.a.createElement(
                    'div',
                    {
                      align: 'center',
                      style: { minHeight: '68vh', paddingTop: '30vh' }
                    },
                    c.a.createElement(
                      'div',
                      {
                        className: 'spinner-border text-info',
                        style: { width: '8em', height: '8em' }
                      },
                      c.a.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Loading...'
                      )
                    )
                  )
                );
              }),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(i.Component),
        Z = a(38),
        K = a.n(Z),
        $ = a(39),
        ee = a.n($),
        te = (function(e) {
          function t() {
            var e, a;
            Object(p.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).render = function() {
                for (
                  var e = [], t = parseFloat(a.props.rating), n = 1;
                  n < 6;
                  n++
                )
                  n <= t
                    ? e.push(
                        c.a.createElement(
                          'div',
                          {
                            className: 'col',
                            key: n,
                            style: {
                              height: '24px',
                              width: '24px',
                              paddingLeft: '0'
                            }
                          },
                          c.a.createElement('img', {
                            src: ee.a,
                            width: '24px',
                            alt: 'star filled'
                          })
                        )
                      )
                    : t - n <= -1
                    ? e.push(
                        c.a.createElement(
                          'div',
                          {
                            className: 'col',
                            key: n,
                            style: {
                              height: '24px',
                              width: '24px',
                              paddingLeft: '0'
                            }
                          },
                          c.a.createElement('img', {
                            src: K.a,
                            width: '24px',
                            alt: 'star'
                          })
                        )
                      )
                    : e.push(
                        c.a.createElement(
                          'div',
                          {
                            className: 'col',
                            key: n + 100,
                            style: { paddingLeft: '0' }
                          },
                          c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', {
                              src: ee.a,
                              width: '24px',
                              alt: 'star filled',
                              style: {
                                clipPath: 'inset(0 '.concat(
                                  (-100 * (t - n)).toFixed(2),
                                  '% 0 0)'
                                )
                              }
                            })
                          ),
                          c.a.createElement(
                            'div',
                            { style: { position: 'relative', bottom: '50%' } },
                            c.a.createElement('img', {
                              src: K.a,
                              width: '24px',
                              alt: 'star',
                              style: {
                                clipPath: 'inset(0 0 0 '.concat(
                                  (100 * (t - n + 1)).toFixed(2),
                                  '%)'
                                )
                              }
                            })
                          )
                        )
                      );
                return c.a.createElement(
                  'span',
                  {
                    className: 'row',
                    'data-toggle': 'tooltip',
                    'data-placement': 'right',
                    title: 'Rating: '.concat(t, ' / 5')
                  },
                  e
                );
              }),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(i.Component),
        ae = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(this, Object(h.a)(t).call(this, e))).state = {
                showSideBar: !e.noSideBar
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  this.setState({ showSideBar: !e.noSideBar });
                }
              },
              {
                key: 'render',
                value: function() {
                  return c.a.createElement(
                    'div',
                    { className: 'container-fluid' },
                    c.a.createElement(
                      'div',
                      { className: 'row' },
                      this.state.showSideBar &&
                        c.a.createElement(
                          'div',
                          { className: 'col-2' },
                          c.a.createElement(X, null)
                        ),
                      c.a.createElement(
                        'div',
                        { className: 'col' },
                        this.props.content
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.Component);
      (ae.Loading = Y), (ae.RatingStar = te);
      var ne = ae,
        re = (a(113), a(73)),
        oe = {
          NavBar: W,
          Header: _,
          Body: ne,
          Footer: (function(e) {
            function t() {
              return (
                Object(p.a)(this, t),
                Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(f.a)(t, e),
              Object(g.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = [
                      '',
                      'About',
                      'Contact',
                      'Team',
                      'Invest',
                      'Terms of Service'
                    ].map(function(e, t) {
                      var a = e.split(' ').join('_');
                      return c.a.createElement(
                        'div',
                        { className: 'd-inline  m-2', key: t },
                        c.a.createElement(
                          re.a,
                          { to: '/'.concat(a) },
                          c.a.createElement(
                            'span',
                            { className: 'text-muted' },
                            c.a.createElement('strong', { id: 'footerLink' }, e)
                          )
                        )
                      );
                    });
                    return c.a.createElement(
                      'div',
                      null,
                      c.a.createElement(
                        'div',
                        {
                          id: 'mainAppFooter',
                          className:
                            'container-fluid p-2 bg-dark justify-content-center'
                        },
                        c.a.createElement(
                          'div',
                          { className: 'row mx-auto justify-content-center' },
                          c.a.createElement('div', { className: 'm-2' }, e)
                        ),
                        c.a.createElement(
                          'div',
                          {
                            className: 'row mt-2 mx-auto justify-content-center'
                          },
                          c.a.createElement(
                            'div',
                            { className: 'text-small' },
                            'LitLister \xa92019'
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(i.Component)
        },
        ie = a(16),
        ce = a.n(ie),
        le = a(17),
        se = a.n(le),
        me = a(29),
        ue = a.n(me),
        de = a(18),
        pe = a.n(de),
        ge = [
          {
            path: '/',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(b.a)(
                    this,
                    Object(h.a)(t).call(this, e)
                  )).onShowOrHide = function(e) {
                    return a.setState({ showSideBar: !a.state.showSideBar });
                  }),
                  (a.state = { showSideBar: !1 }),
                  (a.onShowOrHide = a.onShowOrHide.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  a
                );
              }
              return (
                Object(f.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      var e = [ce.a, se.a, ue.a, pe.a],
                        t = [se.a, ue.a, pe.a, ce.a],
                        a = [ue.a, pe.a, ce.a, se.a],
                        n = function(e) {
                          return e.map(function(e, t) {
                            return c.a.createElement(
                              'div',
                              { className: 'carousel-item', key: t },
                              c.a.createElement('img', {
                                id: 'bookImage',
                                className: 'd-block',
                                src: e,
                                alt: 'book'
                              })
                            );
                          });
                        };
                      return c.a.createElement(
                        'div',
                        null,
                        c.a.createElement(oe.NavBar, null),
                        c.a.createElement(oe.Header, null),
                        c.a.createElement(oe.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: c.a.createElement(
                            'div',
                            { className: 'container-fluid' },
                            c.a.createElement(
                              'div',
                              { className: 'row justify-content-center' },
                              c.a.createElement(
                                'div',
                                {
                                  id: 'bookGallery',
                                  className:
                                    'row flex-fill py-5  justify-content-center'
                                },
                                c.a.createElement(
                                  'div',
                                  { className: 'col-3' },
                                  c.a.createElement(
                                    'div',
                                    {
                                      className: 'carousel slide',
                                      'data-ride': 'carousel'
                                    },
                                    c.a.createElement(
                                      'div',
                                      { className: 'carousel-inner' },
                                      c.a.createElement(
                                        'div',
                                        { className: 'carousel-item active' },
                                        c.a.createElement('img', {
                                          id: 'bookImage',
                                          className: 'd-block',
                                          src: pe.a,
                                          alt: 'First slide'
                                        })
                                      ),
                                      n(e)
                                    )
                                  )
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-3' },
                                  c.a.createElement(
                                    'div',
                                    {
                                      className: 'carousel slide',
                                      'data-ride': 'carousel'
                                    },
                                    c.a.createElement(
                                      'div',
                                      { className: 'carousel-inner' },
                                      c.a.createElement(
                                        'div',
                                        { className: 'carousel-item active' },
                                        c.a.createElement('img', {
                                          id: 'bookImage',
                                          className: 'd-block',
                                          src: ce.a,
                                          alt: 'First slide'
                                        })
                                      ),
                                      n(t)
                                    )
                                  )
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-3' },
                                  c.a.createElement(
                                    'div',
                                    {
                                      className: 'carousel slide ',
                                      'data-ride': 'carousel'
                                    },
                                    c.a.createElement(
                                      'div',
                                      { className: 'carousel-inner ' },
                                      c.a.createElement(
                                        'div',
                                        { className: 'carousel-item  active' },
                                        c.a.createElement('img', {
                                          id: 'bookImage',
                                          className: 'd-block',
                                          src: se.a,
                                          alt: 'First slide'
                                        })
                                      ),
                                      n(a)
                                    )
                                  )
                                )
                              ),
                              c.a.createElement(
                                'div',
                                {
                                  id: 'intro1',
                                  className:
                                    'row flex-fill p-5 justify-content-center'
                                },
                                c.a.createElement(
                                  'div',
                                  { className: 'col-1 mx-auto mr-1' },
                                  c.a.createElement('img', {
                                    className: 'd-block',
                                    src: N.a,
                                    alt: 'Third slide'
                                  })
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-8 mx-auto' },
                                  c.a.createElement(
                                    'h2',
                                    null,
                                    'LitLister is the future of buying and selling books for college students. Selling your old textbooks has never been faster or easier.'
                                  )
                                )
                              ),
                              c.a.createElement(
                                'div',
                                {
                                  id: 'intro2',
                                  className:
                                    'row flex-fill pt-3 justify-content-center'
                                },
                                c.a.createElement(
                                  'h1',
                                  null,
                                  'Safe. Fast. Easy.'
                                )
                              ),
                              c.a.createElement(
                                'div',
                                {
                                  id: 'intro2',
                                  className:
                                    'row flex-fill mt-0 pb-2 justify-content-center'
                                },
                                c.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'col-2 mx-auto  justify-content-center'
                                  },
                                  c.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: w.a,
                                    alt: 'book'
                                  }),
                                  c.a.createElement(
                                    'h3',
                                    null,
                                    'List your book for sale on our site. You can either sell it at a set price or sell it as an auction.'
                                  )
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-2 mx-auto' },
                                  c.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: k.a,
                                    alt: 'chat'
                                  }),
                                  c.a.createElement(
                                    'h3',
                                    null,
                                    'After your book has been bought, choose a place on campus to meet.'
                                  )
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-2 mx-auto' },
                                  c.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: C.a,
                                    alt: 'map'
                                  }),
                                  c.a.createElement(
                                    'h3',
                                    null,
                                    'Exchange books and take a small convenient code given by your buyer to prove they have it.'
                                  )
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-2 mx-auto' },
                                  c.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: A.a,
                                    alt: 'thumb'
                                  }),
                                  c.a.createElement(
                                    'h3',
                                    null,
                                    'Go home happy. There is no need to handle cash or anything. We handle the entire payment process online to make sure you get paid.'
                                  )
                                )
                              ),
                              c.a.createElement(
                                'div',
                                {
                                  id: 'intro3',
                                  className:
                                    'row flex-fill py-3 justify-content-center'
                                },
                                c.a.createElement(
                                  'h1',
                                  null,
                                  'Buying has never. been. easier.'
                                )
                              ),
                              c.a.createElement(
                                'div',
                                {
                                  id: 'intro3',
                                  className:
                                    'row flex-fill p-3 justify-content-center'
                                },
                                c.a.createElement(
                                  'div',
                                  { className: 'col-2' },
                                  c.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: L.a,
                                    alt: 'shield'
                                  })
                                ),
                                c.a.createElement(
                                  'div',
                                  { className: 'col-8 align-middle my-auto' },
                                  c.a.createElement(
                                    'h3',
                                    null,
                                    'Buy books with ease. We handle the payment process. We also make sure you get the book you bought. We provide a moneyback guarantee with every purchase.'
                                  )
                                )
                              )
                            )
                          )
                        }),
                        c.a.createElement(oe.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(i.Component)
          }
        ],
        be = a(23),
        he = [
          {
            path: '/register',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(b.a)(
                    this,
                    Object(h.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    U.getRegister().then(function(e) {
                      e.ok || (window.location = '/');
                    });
                  }),
                  (a.onChange = function(e) {
                    a.setState(Object(R.a)({}, e.target.name, e.target.value));
                  }),
                  (a.onSubmit = function(e) {
                    e.preventDefault(),
                      U.postRegister(
                        a.state.firstname,
                        a.state.lastname,
                        a.state.email,
                        a.state.password
                      ).then(function(e) {
                        e.ok ? (window.location = '/') : console.log(e);
                      });
                  }),
                  (a.render = function() {
                    return c.a.createElement(
                      'div',
                      null,
                      c.a.createElement(oe.NavBar, null),
                      c.a.createElement(oe.Body, {
                        noSideBar: !a.state.showSideBar,
                        content: c.a.createElement(
                          'div',
                          {
                            className: 'container',
                            style: { minHeight: '68vh', marginTop: '12vh' }
                          },
                          c.a.createElement(
                            'form',
                            null,
                            c.a.createElement(
                              'div',
                              { className: 'form-group' },
                              c.a.createElement(
                                'div',
                                { className: 'form-group row' },
                                c.a.createElement(
                                  'label',
                                  {
                                    className: 'col-sm-6',
                                    htmlFor: 'form-first-name'
                                  },
                                  'First Name'
                                ),
                                c.a.createElement(
                                  'label',
                                  {
                                    className: 'col-sm-6',
                                    htmlFor: 'form-last-name'
                                  },
                                  'Last Name'
                                )
                              ),
                              c.a.createElement(
                                'div',
                                { className: 'form-group row' },
                                c.a.createElement('input', {
                                  type: 'text',
                                  className: 'form-control col',
                                  id: 'form-first-name',
                                  placeholder: 'Enter  first name',
                                  name: 'firstname',
                                  value: a.state.name,
                                  onChange: a.onChange,
                                  style: {
                                    marginLeft: '1em',
                                    marginRight: '1em'
                                  }
                                }),
                                c.a.createElement('input', {
                                  type: 'text',
                                  className: 'form-control col',
                                  id: 'form-last-name',
                                  placeholder: 'Enter last name',
                                  name: 'lastname',
                                  value: a.state.name,
                                  onChange: a.onChange,
                                  style: {
                                    marginLeft: '1em',
                                    marginRight: '1em'
                                  }
                                })
                              )
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'form-group' },
                              c.a.createElement(
                                'label',
                                { htmlFor: 'form-email' },
                                'Email address'
                              ),
                              c.a.createElement('input', {
                                type: 'email',
                                className: 'form-control',
                                id: 'form-email',
                                placeholder: 'Enter email',
                                name: 'email',
                                value: a.state.email,
                                onChange: a.onChange
                              })
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'form-group' },
                              c.a.createElement(
                                'label',
                                { htmlFor: 'form-password' },
                                'Password'
                              ),
                              c.a.createElement('input', {
                                type: 'password',
                                className: 'form-control',
                                id: 'form-password',
                                placeholder: 'Password',
                                name: 'password',
                                value: a.state.password,
                                onChange: a.onChange
                              })
                            ),
                            c.a.createElement(
                              'button',
                              {
                                type: 'submit',
                                className: 'btn btn-primary',
                                onClick: a.onSubmit
                              },
                              'Register'
                            )
                          )
                        )
                      }),
                      c.a.createElement(oe.Footer, null)
                    );
                  }),
                  (a.state = {
                    showSideBar: !1,
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                  }),
                  (a.onChange = a.onChange.bind(Object(E.a)(Object(E.a)(a)))),
                  (a.onSubmit = a.onSubmit.bind(Object(E.a)(Object(E.a)(a)))),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(i.Component)
          }
        ],
        fe = !1,
        ve = {
          data: [
            {
              title: 'book1',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book2',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book3',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book4',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book5',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book6',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book7',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book8',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book9',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            {
              title: 'book10',
              description: 'nothing',
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            }
          ]
        },
        Ee = (function(e) {
          function t(e) {
            var a;
            Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).componentDidMount = function() {
                a.state.search(a.state.query, a.state.page).then(function(e) {
                  return e.text().then(function(e) {
                    (e = JSON.parse(e)),
                      a.setState({ data: e.data, pageCount: e.pageCount });
                  });
                });
              }),
              (a.bodyContent = function() {
                return fe
                  ? c.a.createElement(
                      'div',
                      { className: 'container' },
                      a.pagination(a.state.page, 9),
                      a.result(ve.data),
                      a.pagination(a.state.page, 9)
                    )
                  : null === a.state.pageCount
                  ? c.a.createElement(oe.Body.Loading, null)
                  : c.a.createElement(
                      'div',
                      { className: 'container' },
                      a.pagination(a.state.page, a.state.pageCount),
                      a.result(a.state.data),
                      a.pagination(a.state.page, a.state.pageCount)
                    );
              }),
              (a.pagination = function(e, t) {
                if (null === t) return !1;
                if (null === a.state.data || 0 === a.state.data.length)
                  return !1;
                for (
                  var n = c.a.createElement(
                      'li',
                      { className: 'page-item active' },
                      c.a.createElement(
                        'a',
                        { className: 'page-link', href: '# ' },
                        e
                      )
                    ),
                    r =
                      1 !== e &&
                      c.a.createElement(
                        'li',
                        { className: 'page-item' },
                        c.a.createElement(
                          'a',
                          {
                            className: 'page-link',
                            href: '# ',
                            name: e - 1,
                            onClick: a.onPageChange
                          },
                          'Previous'
                        )
                      ),
                    o =
                      e !== t &&
                      c.a.createElement(
                        'li',
                        { className: 'page-item' },
                        c.a.createElement(
                          'a',
                          {
                            className: 'page-link',
                            href: '# ',
                            name: e + 1,
                            onClick: a.onPageChange
                          },
                          'Next'
                        )
                      ),
                    i = e - 1,
                    l = t - e,
                    s = [],
                    m = [],
                    u = -3;
                  u < 0;
                  u++
                )
                  i + u < 0 ||
                    s.push(
                      c.a.createElement(
                        'li',
                        { key: e + u, className: 'page-item' },
                        c.a.createElement(
                          'a',
                          {
                            className: 'page-link',
                            href: '# ',
                            name: e + u,
                            onClick: a.onPageChange
                          },
                          e + u
                        )
                      )
                    );
                for (var d = 1; d < 5; d++)
                  l - d < 0 ||
                    m.push(
                      c.a.createElement(
                        'li',
                        { key: e + d, className: 'page-item' },
                        c.a.createElement(
                          'a',
                          {
                            className: 'page-link',
                            href: '# ',
                            name: e + d,
                            onClick: a.onPageChange
                          },
                          e + d
                        )
                      )
                    );
                return c.a.createElement(
                  'nav',
                  { 'aria-label': 'Page navigation' },
                  c.a.createElement(
                    'ul',
                    { className: 'pagination justify-content-center' },
                    r,
                    s,
                    n,
                    m,
                    o
                  )
                );
              }),
              (a.onPageChange = function(e) {
                if ((e.preventDefault(), fe))
                  a.setState({ page: parseInt(e.target.name) }),
                    window.history.pushState(
                      { html: document.innerHTML, pageTitle: document.title },
                      '',
                      './'.concat(e.target.name)
                    );
                else {
                  var t = parseInt(e.target.name);
                  a.state.search(a.state.query, t).then(function(e) {
                    return e.text().then(function(e) {
                      (e = JSON.parse(e)),
                        a.setState({ data: e.data, page: t });
                    });
                  });
                }
              }),
              (a.result = function(e) {
                return 0 !== e.length
                  ? e.map(function(e, t) {
                      return c.a.createElement(
                        'div',
                        { className: 'container', key: t },
                        c.a.createElement(
                          'div',
                          { className: 'row mt-3' },
                          c.a.createElement(
                            'div',
                            { className: 'col-3 text-center' },
                            c.a.createElement('img', {
                              src: e.pictureurl,
                              className: 'img-fluid',
                              alt: 'fluid'
                            })
                          ),
                          c.a.createElement(
                            'div',
                            { className: 'col' },
                            c.a.createElement('h3', null, e.title),
                            c.a.createElement('h4', null, e.description)
                          )
                        )
                      );
                    })
                  : c.a.createElement(
                      'div',
                      { className: 'container mt-3' },
                      c.a.createElement('br', null),
                      c.a.createElement('h2', null, 'no result :('),
                      c.a.createElement('br', null)
                    );
              }),
              (a.render = function() {
                return c.a.createElement(
                  'div',
                  null,
                  c.a.createElement(oe.NavBar, {
                    category: a.state.category,
                    query: a.state.query
                  }),
                  c.a.createElement(oe.Header, null),
                  c.a.createElement(oe.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  c.a.createElement(oe.Footer, null)
                );
              }),
              (a.state = {
                showSideBar: !0,
                data: null,
                page: parseInt(a.props.match.params.page),
                pageCount: null,
                category: null,
                search: null,
                query: null
              });
            var n = a.props.match.params,
              r = n.author,
              o = n.isbn,
              i = n.title;
            return (
              r
                ? ((a.state.category = 'author'),
                  (a.state.search = H.getSearchByAuthor),
                  (a.state.query = r))
                : o
                ? ((a.state.category = 'isbn'),
                  (a.state.search = H.getSearchByIsbn),
                  (a.state.query = o))
                : i &&
                  ((a.state.category = 'title'),
                  (a.state.search = H.getSearchByTitle),
                  (a.state.query = i)),
              (a.bodyContent = a.bodyContent.bind(Object(E.a)(Object(E.a)(a)))),
              (a.pagination = a.pagination.bind(Object(E.a)(Object(E.a)(a)))),
              (a.onPageChange = a.onPageChange.bind(
                Object(E.a)(Object(E.a)(a))
              )),
              (a.result = a.result.bind(Object(E.a)(Object(E.a)(a)))),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(i.Component),
        ye = [
          {
            path: '/search/author/:author/page/:page',
            exact: !0,
            component: Ee
          },
          { path: '/search/isbn/:isbn/page/:page', exact: !0, component: Ee },
          { path: '/search/title/:title/page/:page', exact: !0, component: Ee }
        ],
        Ne = 'Once upon',
        je = 'this book is about',
        we = 'Seller@mail.sfsu.edu',
        Oe = 'used',
        ke = '$8.99',
        Se = [
          {
            path: '/book/:bid',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(b.a)(
                    this,
                    Object(h.a)(t).call(this, e)
                  )).onShowOrHide = function(e) {
                    return a.setState({ showSideBar: !a.state.showSideBar });
                  }),
                  (a.state = { showSideBar: !0 }),
                  (a.onShowOrHide = a.onShowOrHide.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  a
                );
              }
              return (
                Object(f.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      var e = c.a.createElement(
                        'div',
                        null,
                        c.a.createElement(
                          'div',
                          { className: 'container' },
                          c.a.createElement(
                            'div',
                            { className: 'row-1' },
                            c.a.createElement(
                              'div',
                              { className: 'col-6' },
                              c.a.createElement('img', {
                                className: 'd-block w-100',
                                src:
                                  'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
                                alt: 'placeholder'
                              })
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'col-6' },
                              c.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Title: ',
                                Ne
                              ),
                              c.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Description: ',
                                je
                              ),
                              c.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'SellerInfo: ',
                                we
                              ),
                              c.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Book State: ',
                                Oe
                              ),
                              c.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Price: ',
                                ke
                              )
                            )
                          )
                        )
                      );
                      return c.a.createElement(
                        'div',
                        null,
                        c.a.createElement(oe.NavBar, null),
                        c.a.createElement(oe.Header, null),
                        c.a.createElement(oe.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: e
                        }),
                        c.a.createElement(oe.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(i.Component)
          }
        ],
        Ce = !0,
        xe = {
          data: {
            firstname: 'Bob',
            lastname: 'Ross',
            email: 'fake@email.domain',
            rating: 4.3,
            pictureurl:
              'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            description:
              'this is a placeholder account. Turn off debug to switch to an actual profile.'
          }
        },
        Ae = [
          {
            path: '/user/:uid',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(b.a)(
                    this,
                    Object(h.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    Ce
                      ? a.setState({ data: xe.data, display: 'Profile' })
                      : J.getUserProfile(a.props.match.params.uid).then(
                          function(e) {
                            e.ok
                              ? e.text().then(function(e) {
                                  return a.setState({
                                    data: e,
                                    display: 'Profile'
                                  });
                                })
                              : (window.location = '/404');
                          }
                        );
                  }),
                  (a.bodyContent = function() {
                    var e = a.state.guest;
                    return c.a.createElement(
                      'div',
                      null,
                      a.state.display
                        ? c.a.createElement(
                            'div',
                            {
                              className: 'container',
                              style: {
                                minHeight: '68vh',
                                marginTop: '8vh',
                                paddingBottom: '8vh'
                              }
                            },
                            c.a.createElement(
                              'div',
                              { className: 'row' },
                              a.profileSideBar({ guest: e }),
                              c.a.createElement(
                                'div',
                                {
                                  className: 'col',
                                  style: { marginLeft: '2em  ' }
                                },
                                a.userNavigation(),
                                a.userContent({ guest: e })
                              )
                            )
                          )
                        : c.a.createElement(oe.Body.Loading, null)
                    );
                  }),
                  (a.profileSideBar = function(e) {
                    var t = e.guest;
                    return c.a.createElement(
                      'div',
                      { className: 'col-3', style: { marginTop: '2em' } },
                      c.a.createElement('img', {
                        src: a.state.data.pictureurl,
                        className: 'img-fluid img-thumbnail',
                        alt: 'profile',
                        style: {
                          borderBottomWidth: '0',
                          borderBottomLeftRadius: '0',
                          borderBottomRightRadius: '0'
                        }
                      }),
                      c.a.createElement(
                        'ul',
                        { className: 'list-group' },
                        c.a.createElement(
                          'li',
                          {
                            className: 'list-group-item text-center',
                            style: {
                              borderTopWidth: '0',
                              borderTopLeftRadius: '0',
                              borderTopRightRadius: '0'
                            }
                          },
                          c.a.createElement(
                            'h3',
                            null,
                            a.state.data.firstname,
                            ' ',
                            a.state.data.lastname
                          ),
                          a.state.data.rating &&
                            a.displayRating(a.state.data.rating)
                        ),
                        c.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            name: 'Message',
                            onClick: a.onMessage
                          },
                          c.a.createElement('i', {
                            className: 'fa fa-envelope'
                          }),
                          ' Message'
                        ),
                        c.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            name: 'Review',
                            onClick: a.onReview
                          },
                          c.a.createElement('i', { className: 'fa fa-star' }),
                          ' Review'
                        ),
                        c.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            name: 'Listing',
                            onClick: a.onListing
                          },
                          c.a.createElement('i', { className: 'fa fa-list' }),
                          ' Listing'
                        ),
                        t
                          ? c.a.createElement(
                              'button',
                              {
                                type: 'button',
                                className:
                                  'list-group-item list-group-item-action',
                                onClick: a.onReport
                              },
                              c.a.createElement('i', {
                                className: 'fa fa-flag'
                              }),
                              ' Report'
                            )
                          : c.a.createElement(
                              'button',
                              {
                                type: 'button',
                                className:
                                  'list-group-item list-group-item-action',
                                onClick: a.onConfigure
                              },
                              c.a.createElement('i', {
                                className: 'fa fa-cogs'
                              }),
                              ' Configure'
                            )
                      )
                    );
                  }),
                  (a.userNavigation = function() {
                    return c.a.createElement(
                      'ul',
                      { className: 'nav justify-content-center nav-tabs' },
                      ['Profile', 'Message', 'Review', 'Listing'].map(function(
                        e,
                        t
                      ) {
                        return a.state.display === e
                          ? c.a.createElement(
                              'li',
                              { key: t, className: 'nav-item' },
                              c.a.createElement(
                                'a',
                                {
                                  className: 'nav-link active',
                                  href: '# ',
                                  name: e,
                                  onClick: a.onUserNavigation
                                },
                                e
                              )
                            )
                          : c.a.createElement(
                              'li',
                              { key: t, className: 'nav-item' },
                              c.a.createElement(
                                'a',
                                {
                                  className: 'nav-link',
                                  href: '# ',
                                  name: e,
                                  onClick: a.onUserNavigation
                                },
                                e
                              )
                            );
                      })
                    );
                  }),
                  (a.userContent = function(e) {
                    e.guest;
                    return 'Profile' === a.state.display
                      ? c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement('br', null),
                          c.a.createElement('h2', null, 'Profile'),
                          c.a.createElement(
                            'div',
                            null,
                            a.state.data.description
                          )
                        )
                      : 'Message' === a.state.display
                      ? c.a.createElement(
                          'div',
                          null,
                          c.a.createElement('br', null),
                          'to do'
                        )
                      : 'Review' === a.state.display
                      ? c.a.createElement(
                          'div',
                          null,
                          c.a.createElement('br', null),
                          'to do'
                        )
                      : 'Listing' === a.state.display
                      ? c.a.createElement(
                          'div',
                          null,
                          c.a.createElement('br', null),
                          'to do'
                        )
                      : void 0;
                  }),
                  (a.displayRating = function(e) {
                    return c.a.createElement(
                      'span',
                      null,
                      c.a.createElement('br', null),
                      c.a.createElement(oe.Body.RatingStar, { rating: e })
                    );
                  }),
                  (a.onUserNavigation = function(e) {
                    a.state.onUserNavigation[e.target.name](e);
                  }),
                  (a.onProfile = function(e) {
                    e.preventDefault(), a.setState({ display: e.target.name });
                  }),
                  (a.onMessage = function(e) {
                    e.preventDefault(), a.setState({ display: e.target.name });
                  }),
                  (a.onReview = function(e) {
                    e.preventDefault(), a.setState({ display: e.target.name });
                  }),
                  (a.onListing = function(e) {
                    e.preventDefault(), a.setState({ display: e.target.name });
                  }),
                  (a.onReport = function(e) {
                    e.preventDefault();
                  }),
                  (a.onConfigure = function(e) {
                    e.preventDefault();
                  }),
                  (a.render = function() {
                    return c.a.createElement(
                      'div',
                      null,
                      c.a.createElement(oe.NavBar, null),
                      c.a.createElement(oe.Body, {
                        noSideBar: !a.state.showSideBar,
                        content: a.bodyContent()
                      }),
                      c.a.createElement(oe.Footer, null)
                    );
                  }),
                  (a.state = {
                    guest: !0,
                    data: null,
                    display: null,
                    onUserNavigation: {
                      Profile: a.onProfile,
                      Message: a.onMessage,
                      Review: a.onReview,
                      Listing: a.onListing
                    }
                  }),
                  (a.bodyContent = a.bodyContent.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  (a.profileSideBar = a.profileSideBar.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  (a.userNavigation = a.userNavigation.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  (a.userContent = a.userContent.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  (a.displayRating = a.displayRating.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  (a.onUserNavigation = a.onUserNavigation.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  (a.onProfile = a.onProfile.bind(Object(E.a)(Object(E.a)(a)))),
                  (a.onMessage = a.onMessage.bind(Object(E.a)(Object(E.a)(a)))),
                  (a.onReview = a.onReview.bind(Object(E.a)(Object(E.a)(a)))),
                  (a.onListing = a.onListing.bind(Object(E.a)(Object(E.a)(a)))),
                  (a.onReport = a.onReport.bind(Object(E.a)(Object(E.a)(a)))),
                  (a.onConfigure = a.onConfigure.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(i.Component)
          }
        ],
        Be = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  return c.a.createElement(c.a.Fragment, null, 'listing');
                }
              }
            ]),
            t
          );
        })(i.Component),
        Le = !0,
        Re = {
          data: {
            title: 'book1',
            isbn: '111-111-111',
            authors: ['Adam Bob', 'Calvin Dan'],
            description: 'nothing',
            pictureurl:
              'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
          }
        },
        Pe = {
          data: [
            {
              name: 'Eric Fin',
              rating: 4.9,
              condition: 'brand new',
              price: 24.99
            },
            {
              name: 'George Harry',
              rating: 4.2,
              condition: 'brand new',
              price: 24.99
            },
            { name: 'Ivan John', rating: 4.2, condition: 'used', price: 34.5 }
          ]
        },
        Me = [
          {
            path: '/book/:bid/list',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(b.a)(
                    this,
                    Object(h.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    Le && a.setState({ bookData: Re.data, listData: Pe.data });
                  }),
                  (a.bodyContent = function() {
                    return c.a.createElement(c.a.Fragment, null, 'ListingList');
                  }),
                  (a.render = function() {
                    return c.a.createElement(
                      'div',
                      null,
                      c.a.createElement(oe.NavBar, null),
                      c.a.createElement(oe.Header, null),
                      c.a.createElement(oe.Body, { content: a.bodyContent() }),
                      c.a.createElement(oe.Footer, null)
                    );
                  }),
                  (a.state = {
                    bid: e.match.params.bid,
                    bookData: null,
                    listData: null
                  }),
                  (a.bodyContent = a.bodyContent.bind(
                    Object(E.a)(Object(E.a)(a))
                  )),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(i.Component)
          },
          { path: '/book/:bid/list/:lid', exact: !0, component: Be }
        ],
        De = [].concat(
          Object(d.a)(ge),
          Object(d.a)(be.default),
          Object(d.a)(he),
          Object(d.a)(ye),
          Object(d.a)(Se),
          Object(d.a)(Ae),
          Object(d.a)(Me),
          Object(d.a)(v)
        );
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(122);
      null !== r.a &&
        null !== o.a &&
        (s.a.render(
          c.a.createElement(
            m.a,
            null,
            c.a.createElement('div', null, Object(u.a)(De))
          ),
          document.getElementById('root')
        ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          }));
    }
  ],
  [[74, 1, 2]]
]);
//# sourceMappingURL=main.ed2d6977.chunk.js.map
