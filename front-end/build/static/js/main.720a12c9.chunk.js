(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    function(e, t, a) {
      'use strict';
      var n = a(13),
        r = a(4),
        o = a(6),
        l = a(5),
        i = a(7),
        c = a(1),
        s = a(0),
        m = a.n(s),
        u = a(8),
        d = a(45),
        p = a.n(d),
        g = (a(118), a(77)),
        b = a.n(g),
        h = !1,
        f = (function(e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
              ((a = Object(o.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).componentDidMount = function() {
                h
                  ? a.setState({ user: { firstname: 'Rob' } })
                  : u.a.getLogin().then(function(e) {
                      e.ok &&
                        e.text().then(function(e) {
                          e.firstname &&
                            a.setState({ user: { firstname: e.firstname } });
                        });
                    });
              }),
              (a.onChange = function(e) {
                a.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (a.onLogin = function(e) {
                e.preventDefault(),
                  u.a
                    .postLogin(a.state.email, a.state.password)
                    .then(function(e) {
                      e.user
                        ? a.setState({ user: e.user })
                        : console.log(e.error);
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
              (a.render = function() {
                var e = m.a.createElement(
                    'form',
                    {
                      className: 'form-inline flex-fill mr-2',
                      onSubmit: a.onSearch
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'input-group flex-fill',
                        onSubmit: a.onSearch
                      },
                      m.a.createElement(
                        'div',
                        {
                          className: 'input-group-prepend',
                          onSubmit: a.onSearch
                        },
                        m.a.createElement(
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
                          m.a.createElement('option', null, 'title'),
                          m.a.createElement('option', null, 'author'),
                          m.a.createElement('option', null, 'isbn')
                        )
                      ),
                      m.a.createElement('input', {
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
                      m.a.createElement(
                        'div',
                        { className: 'input-group-append' },
                        m.a.createElement(
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
                  t = m.a.createElement(
                    'div',
                    { className: 'dropdown' },
                    m.a.createElement(
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
                    m.a.createElement(
                      'div',
                      {
                        className: 'dropdown-menu',
                        'aria-labelledby': 'LoginButton'
                      },
                      m.a.createElement(
                        'div',
                        { className: 'container' },
                        m.a.createElement(
                          'div',
                          { className: 'form-group' },
                          m.a.createElement('input', {
                            type: 'text',
                            name: 'email',
                            placeholder: '  email',
                            value: a.state.email,
                            onChange: a.onChange,
                            style: { marginBottom: '1em' }
                          })
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'form-group' },
                          m.a.createElement('input', {
                            type: 'password',
                            name: 'password',
                            placeholder: '  password',
                            value: a.state.password,
                            onChange: a.onChange,
                            style: { marginBottom: '1em' }
                          })
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'form-group' },
                          m.a.createElement(
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
                  n = m.a.createElement(
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
                  r = m.a.createElement(
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
                  o = m.a.createElement('img', {
                    src: b.a,
                    className: 'mr-2',
                    height: '30',
                    width: '30',
                    alt: 'banner'
                  }),
                  l = m.a.createElement(
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
                  ? m.a.createElement(
                      'nav',
                      {
                        className: 'navbar navbar-expand-lg navbar-dark bg-dark'
                      },
                      m.a.createElement(
                        'a',
                        { className: 'navbar-brand', href: '/' },
                        m.a.createElement('img', {
                          src: p.a,
                          height: '28',
                          alt: 'banner'
                        }),
                        '  ',
                        ' LitLister'
                      ),
                      m.a.createElement(
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
                        m.a.createElement('span', {
                          className: 'navbar-toggler-icon'
                        })
                      ),
                      m.a.createElement(
                        'div',
                        {
                          className: 'collapse navbar-collapse',
                          id: 'navbarSupportedContent'
                        },
                        m.a.createElement('ul', {
                          className: 'navbar-nav mr-auto'
                        }),
                        e,
                        m.a.createElement(
                          'form',
                          { className: 'form-inline my-2 my-lg-0' },
                          m.a.createElement(
                            'div',
                            { className: 'text-light' },
                            'Hi, ',
                            a.state.user.firstname
                          ),
                          n,
                          o,
                          l
                        )
                      )
                    )
                  : m.a.createElement(
                      'nav',
                      {
                        className: 'navbar navbar-expand-lg navbar-dark bg-dark'
                      },
                      m.a.createElement(
                        'a',
                        { className: 'navbar-brand', href: '/' },
                        m.a.createElement('img', {
                          src: p.a,
                          height: '28',
                          alt: 'banner'
                        }),
                        '  ',
                        ' LitLister'
                      ),
                      m.a.createElement(
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
                        m.a.createElement('span', {
                          className: 'navbar-toggler-icon'
                        })
                      ),
                      m.a.createElement(
                        'div',
                        {
                          className: 'collapse navbar-collapse',
                          id: 'navbarSupportedContent'
                        },
                        m.a.createElement('ul', { className: 'navbar-nav' }),
                        e,
                        m.a.createElement(
                          'form',
                          { className: 'form-inline my-2 my-lg-0' },
                          t,
                          r,
                          o,
                          l
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
              (a.onChange = a.onChange.bind(Object(c.a)(Object(c.a)(a)))),
              (a.onLogin = a.onLogin.bind(Object(c.a)(Object(c.a)(a)))),
              (a.onRegister = a.onRegister.bind(Object(c.a)(Object(c.a)(a)))),
              (a.onSearch = a.onSearch.bind(Object(c.a)(Object(c.a)(a)))),
              a
            );
          }
          return Object(i.a)(t, e), t;
        })(s.Component),
        E = a(9),
        v = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'render',
                value: function() {
                  return m.a.createElement('div', null);
                }
              }
            ]),
            t
          );
        })(s.Component),
        y = (a(119),
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
        N = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
              i[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(i))
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
            Object(i.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return m.a.createElement(
                    'nav',
                    { id: 'sidebar', style: { minHeight: '100%' } },
                    m.a.createElement(
                      'div',
                      { className: 'sidebar-header' },
                      m.a.createElement(
                        'h3',
                        null,
                        'San Francisco State University'
                      )
                    ),
                    m.a.createElement(
                      'ul',
                      { className: 'list-unstyled components' },
                      m.a.createElement('p', null, 'Deparments'),
                      y.data.map(function(t, a) {
                        return m.a.createElement(
                          'li',
                          { key: a },
                          m.a.createElement(
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
                          m.a.createElement(
                            'ul',
                            {
                              className: 'collapse list-unstyled',
                              id: ''.concat(
                                t.departmentName.replace(/\s+/g, '-'),
                                'Submenu'
                              )
                            },
                            t.departmentCollege.map(function(t, a) {
                              return m.a.createElement(
                                'li',
                                { key: a },
                                m.a.createElement(
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
        })(s.Component),
        w = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
              i[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(i))
              )).render = function() {
                return m.a.createElement(
                  'div',
                  { className: 'container', style: { minHeight: '80vh' } },
                  m.a.createElement(
                    'div',
                    {
                      align: 'center',
                      style: { minHeight: '68vh', paddingTop: '30vh' }
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'spinner-border text-info',
                        style: { width: '8em', height: '8em' }
                      },
                      m.a.createElement(
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
          return Object(i.a)(t, e), t;
        })(s.Component),
        k = a(46),
        j = a.n(k),
        C = a(47),
        O = a.n(C),
        S = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
              i[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(i))
              )).render = function() {
                for (
                  var e = [],
                    t = parseFloat(a.props.rating),
                    n = a.props.dimension
                      ? ''.concat(a.props.dimension, 'px')
                      : '24px',
                    r = 1;
                  r < 6;
                  r++
                )
                  r <= t
                    ? e.push(
                        m.a.createElement(
                          'div',
                          {
                            className: 'col',
                            key: r,
                            style: {
                              height: n,
                              width: n,
                              paddingLeft: '0',
                              paddingRight: '1px'
                            }
                          },
                          m.a.createElement('img', {
                            src: O.a,
                            width: n,
                            alt: 'star filled'
                          })
                        )
                      )
                    : t - r <= -1
                    ? e.push(
                        m.a.createElement(
                          'div',
                          {
                            className: 'col',
                            key: r,
                            style: {
                              height: n,
                              width: n,
                              paddingLeft: '0',
                              paddingRight: '1px'
                            }
                          },
                          m.a.createElement('img', {
                            src: j.a,
                            width: n,
                            alt: 'star'
                          })
                        )
                      )
                    : e.push(
                        m.a.createElement(
                          'div',
                          {
                            className: 'col',
                            key: r + 100,
                            style: { paddingLeft: '0', paddingRight: '1px' }
                          },
                          m.a.createElement(
                            'div',
                            null,
                            m.a.createElement('img', {
                              src: O.a,
                              width: n,
                              alt: 'star filled',
                              style: {
                                clipPath: 'inset(0 '.concat(
                                  (-100 * (t - r)).toFixed(2),
                                  '% 0 0)'
                                )
                              }
                            })
                          ),
                          m.a.createElement(
                            'div',
                            { style: { position: 'relative', bottom: '50%' } },
                            m.a.createElement('img', {
                              src: j.a,
                              width: n,
                              alt: 'star',
                              style: {
                                clipPath: 'inset(0 0 0 '.concat(
                                  (100 * (t - r + 1)).toFixed(2),
                                  '%)'
                                )
                              }
                            })
                          )
                        )
                      );
                return m.a.createElement(
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
          return Object(i.a)(t, e), t;
        })(s.Component),
        D = (function(e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
              ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).state = {
                showSideBar: !e.noSideBar
              }),
              a
            );
          }
          return (
            Object(i.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  this.setState({ showSideBar: !e.noSideBar });
                }
              },
              {
                key: 'render',
                value: function() {
                  return m.a.createElement(
                    'div',
                    { className: 'container-fluid height-100' },
                    m.a.createElement(
                      'div',
                      {
                        className: 'row',
                        style: { minHeight: 'calc(100vh - 88px - 57.2px)' }
                      },
                      this.state.showSideBar &&
                        m.a.createElement(
                          'div',
                          { className: 'col-2 p-0' },
                          m.a.createElement(N, null)
                        ),
                      m.a.createElement(
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
        })(s.Component);
      (D.Loading = w), (D.RatingStar = S);
      var x = D,
        B = (a(120), a(140)),
        L = (function(e) {
          function t(e) {
            return (
              Object(r.a)(this, t),
              Object(o.a)(this, Object(l.a)(t).call(this, e))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(E.a)(t, [
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
                    return m.a.createElement(
                      'div',
                      { className: 'd-inline  m-2', key: t },
                      m.a.createElement(
                        B.a,
                        { to: '/'.concat(a) },
                        m.a.createElement(
                          'span',
                          { className: 'text-muted' },
                          m.a.createElement('strong', { id: 'footerLink' }, e)
                        )
                      )
                    );
                  });
                  return m.a.createElement(
                    'div',
                    {
                      style: {
                        position: 'relative',
                        right: '0',
                        bottom: '0',
                        left: '0'
                      }
                    },
                    m.a.createElement(
                      'div',
                      {
                        id: 'mainAppFooter',
                        className:
                          'container-fluid p-2 bg-dark justify-content-center'
                      },
                      m.a.createElement(
                        'div',
                        { className: 'row mx-auto justify-content-center' },
                        m.a.createElement('div', { className: 'm-2' }, e)
                      ),
                      m.a.createElement(
                        'div',
                        {
                          className: 'row mt-2 mx-auto justify-content-center'
                        },
                        m.a.createElement(
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
        })(s.Component);
      t.a = { NavBar: f, Header: v, Body: x, Footer: L };
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      'use strict';
      var n = a(76),
        r = a.n(n),
        o = a(34),
        l = a.n(o),
        i = r.a.connect(l.a),
        c = function(e) {
          return e.json();
        },
        s = function(e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'post';
          return fetch(
            (function(e) {
              return ''.concat(l.a, '/api').concat(e);
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
        },
        m = {
          getLogin: function() {
            return s('/login', {}, 'get');
          },
          getRegister: function() {
            return s('/register', {}, 'get');
          },
          postLogin: function(e, t) {
            return s('/login', { email: e, password: t }).then(c);
          },
          postLogout: function() {
            return s('/logout', {});
          },
          postRegister: function(e, t, a, n) {
            return s('/register', {
              firstname: e,
              lastname: t,
              email: a,
              password: n
            });
          }
        },
        u = {
          getBookInfo: function(e) {
            return s('book/'.concat(e), {}, 'get').then(c);
          },
          getListInfo: function(e) {
            return s('/book/'.concat(e, '/list'), {}, 'get').then(c);
          },
          getListingInfo: function(e, t) {
            return s('/book/'.concat(e, '/list/').concat(t)).then(c);
          }
        },
        d = {
          getSearchByAuthor: function(e, t) {
            return s(
              '/search/author/'.concat(e, '/page/').concat(t),
              {},
              'get'
            );
          },
          getSearchByIsbn: function(e, t) {
            return s('/search/isbn/'.concat(e, '/page/').concat(t), {}, 'get');
          },
          getSearchByTitle: function(e, t) {
            return s('/search/title/'.concat(e, '/page/').concat(t), {}, 'get');
          }
        },
        p = {
          getUserChatList: function(e) {
            return s('/user/'.concat(e, '/chat'), {}, 'get').then(c);
          },
          getUserChatLog: function(e) {
            var t = e.uid,
              a = e.cid;
            return s('/user/'.concat(t, '/chat/').concat(a), {}, 'get').then(c);
          },
          getUserConfiguration: function(e) {
            return s('/user/'.concat(e, '/configuration'), {}, 'get').then(c);
          },
          getUserProfile: function(e) {
            return s('/user/'.concat(e), {}, 'get').then(c);
          },
          postUserChatLog: function(e) {
            var t = e.uid,
              a = e.cid,
              n = e.message;
            return s('/user/'.concat(t, '/chat.').concat(a), { message: n });
          },
          postUserConfiguration: function(e) {
            var t = e.uid,
              a = e.configuration;
            return s('/user/'.concat(t, '/configuration'), {
              configuration: a
            });
          }
        },
        g = {
          getTransactionInfo: function(e) {
            return s('/transaction/'.concat(e), {}, 'get').then(c);
          },
          postTransactionInfo: function(e) {
            var t = e.tid,
              a = e.data;
            return s('/transaction/'.concat(t), { data: a });
          }
        };
      a.d(t, 'f', function() {
        return i;
      }),
        a.d(t, 'a', function() {
          return m;
        }),
        a.d(t, 'b', function() {
          return u;
        }),
        a.d(t, 'c', function() {
          return d;
        }),
        a.d(t, 'e', function() {
          return p;
        }),
        a.d(t, 'd', function() {
          return g;
        });
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
      var n = {
        './About': 32,
        './About.css': 62,
        './About.js': 32,
        './AboutPerson': 33,
        './AboutPerson.js': 33,
        './Edwin Menjivar': 63,
        './Edwin Menjivar.json': 63,
        './Icons/gear_white.svg': 35,
        './Jesus Garnica': 64,
        './Jesus Garnica.json': 64,
        './John Mendoza': 65,
        './John Mendoza.json': 65,
        './Leonid Grekhov': 66,
        './Leonid Grekhov.json': 66,
        './Michael Winata': 67,
        './Michael Winata.json': 67,
        './Vismay Patel': 68,
        './Vismay Patel.json': 68,
        './VismayPatel.jpg': 124,
        './alpha.png': 125,
        './jesusGarnica.png': 126,
        './john.png': 127,
        './members': 21,
        './members.js': 21,
        './michael winata.jpg': 128,
        './route': 31,
        './route.js': 31
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
        (r.id = 29);
    },
    ,
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(32),
        r = a(33);
      t.default = [
        { path: '/about', exact: !0, component: n.default },
        { path: '/about/:person', exact: !0, component: r.default }
      ];
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(4),
        r = a(9),
        o = a(6),
        l = a(5),
        i = a(7),
        c = a(1),
        s = a(0),
        m = a.n(s),
        u = (a(62), a(35)),
        d = a.n(u),
        p = a(2),
        g = a(21),
        b = (function(e) {
          function t(e) {
            var r;
            return (
              Object(n.a)(this, t),
              ((r = Object(o.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).teamCards = function() {
                return m.a.createElement(
                  m.a.Fragment,
                  null,
                  g.default.map(function(e, t) {
                    var n = r.state.profiles[t];
                    return m.a.createElement(
                      'div',
                      { className: 'col-xl-3 col-md-6 mb-4', key: t },
                      m.a.createElement(
                        'div',
                        { className: 'card border-0 ' },
                        m.a.createElement('img', {
                          src: a(29)('./'.concat(n.picture)),
                          className: 'card-img-top cover',
                          height: '250',
                          wdith: '200',
                          alt: '...'
                        }),
                        m.a.createElement(
                          'div',
                          { className: 'card-body text-center' },
                          m.a.createElement(
                            'h5',
                            { className: 'card-title mb-0' },
                            n.name
                          ),
                          m.a.createElement(
                            'div',
                            { className: 'card-text text-black-50' },
                            n.role
                          )
                        )
                      )
                    );
                  })
                );
              }),
              (r.state = {
                showSideBar: !1,
                profiles: g.default.map(function(e) {
                  return a(29)('./' + e);
                })
              }),
              (r.teamCards = r.teamCards.bind(Object(c.a)(Object(c.a)(r)))),
              r
            );
          }
          return (
            Object(i.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'render',
                value: function() {
                  return m.a.createElement(
                    'div',
                    null,
                    m.a.createElement(p.a.NavBar, null),
                    m.a.createElement(p.a.Body, {
                      noSideBar: !this.state.showSideBar,
                      content: m.a.createElement(
                        'div',
                        {
                          className:
                            'container-fluid w-100  about-body height-100'
                        },
                        m.a.createElement(
                          'div',
                          { className: 'row  main-box' },
                          m.a.createElement(
                            'span',
                            {
                              className:
                                'header-text-big m-auto  text-center p-4'
                            },
                            'What is LitLister?'
                          ),
                          m.a.createElement(
                            'p',
                            { className: 'p-5 text-over-image' },
                            'We are college students helping others fight against rising prices of textbooks. College is expensive enough so we wanted to create something to bring the pain to greedy publishers.'
                          ),
                          m.a.createElement(
                            'svg',
                            {
                              className: 'pt-5',
                              width: '100%',
                              height: '172',
                              viewBox: '0 0 100% 172',
                              fill: 'none'
                            },
                            m.a.createElement(
                              'path',
                              { fill: '#212c4f' },
                              m.a.createElement('animate', {
                                repeatCount: 'indefinite',
                                fill: 'freeze',
                                attributeName: 'd',
                                dur: '10s',
                                values:
                                  'M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;'
                              })
                            )
                          )
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'row  about-box' },
                          m.a.createElement(
                            'span',
                            { className: 'header-text  text-center  mt-3 p-4' },
                            'We are made to fight against expensive books and save you money.'
                          ),
                          m.a.createElement(
                            'p',
                            { className: 'p-5' },
                            'We are college students helping others fight against rising prices of textbooks. College is expensive enough so we wanted to create something to bring the pain to greedy publishers.'
                          )
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'row p-3 m-3 about-box' },
                          m.a.createElement(
                            'div',
                            {
                              className:
                                'col header-text text-center align-middle'
                            },
                            m.a.createElement(
                              'span',
                              null,
                              "No gimmicks. No ICO's. We work around the clock to make a business that works for you."
                            )
                          ),
                          m.a.createElement(
                            'div',
                            { className: 'col-md-auto  m-auto ' },
                            m.a.createElement(
                              'div',
                              { className: 'circle m-auto ', id: 'gearBox' },
                              m.a.createElement('img', {
                                id: 'gearLogo2',
                                width: '80',
                                height: '80',
                                src: d.a
                              }),
                              m.a.createElement('img', {
                                id: 'gearLogo',
                                src: d.a
                              })
                            )
                          )
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'row about-box' },
                          m.a.createElement(
                            'p',
                            { className: 'p-5 text-center' },
                            'We have only one goal and that is to set you up with your books for the coming semester. Do not stress about that one really expensive textbook. We will help you find a great deal on it.'
                          )
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'row  about-box ' },
                          m.a.createElement(
                            'span',
                            {
                              className: 'header-text  text-center  m-auto p-4'
                            },
                            'Meet the team.'
                          ),
                          m.a.createElement(
                            'p',
                            { className: 'p-5' },
                            'We are college students helping others fight against rising prices of textbooks. College is expensive enough so we wanted to create something to bring the pain to greedy publishers.'
                          )
                        ),
                        m.a.createElement(
                          'div',
                          {
                            className:
                              'row justify-content-center flex-fill w-100'
                          },
                          this.teamCards()
                        )
                      )
                    }),
                    m.a.createElement(p.a.Footer, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.default = b;
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(4),
        r = a(9),
        o = a(6),
        l = a(5),
        i = a(7),
        c = a(0),
        s = a.n(c),
        m = a(141),
        u = a(140),
        d = (function(e) {
          function t(e) {
            var r;
            Object(n.a)(this, t),
              (r = Object(o.a)(this, Object(l.a)(t).call(this, e)));
            var i = e.match.params.person;
            try {
              r.state = { profile: a(29)('./' + i) };
            } catch (c) {
              r.state = { fail: !0 };
            }
            return r;
          }
          return (
            Object(i.a)(t, e),
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
                                src: a(29)(
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
        })(c.Component);
      t.default = d;
    },
    function(e, t) {
      var a = '';
      Object({ NODE_ENV: 'production', PUBLIC_URL: '' })
        .REACT_APP_LOCAL_SERVER && (a = 'http://localhost:3000'),
        (e.exports = a);
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/gear_white.5659a16a.svg';
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
      e.exports = a.p + 'static/media/logo.7d528012.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/star-outline.27859bb7.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/star-outline-filled.5ed6acb6.svg';
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
    ,
    function(e, t, a) {},
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
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/money_icon.d9282da1.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/book_icon.af68bfde.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/chat_icon.820b45ed.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/map_icon.dfeedef4.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/thumbs_up.c2e65d8b.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/shield_icon.b6bab0cc.svg';
    },
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/shoppingCart.69728e1f.svg';
    },
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = a(139);
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
    function(e, t, a) {},
    function(e, t, a) {},
    ,
    function(e, t, a) {},
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {
      'use strict';
      a.r(t);
      a(82);
      var n = a(44),
        r = a.n(n),
        o = a(69),
        l = (a(83), a(84), a(0)),
        i = a.n(l),
        c = a(14),
        s = a.n(c),
        m = a(144),
        u = a(80),
        d = a(11),
        p = a(4),
        g = a(9),
        b = a(6),
        h = a(5),
        f = a(7),
        E = [
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
                      return i.a.createElement('div', null, '404');
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        v = a(1),
        y = (a(89), a(70)),
        N = a.n(y),
        w = a(71),
        k = a.n(w),
        j = a(72),
        C = a.n(j),
        O = a(73),
        S = a.n(O),
        D = a(74),
        x = a.n(D),
        B = a(75),
        L = a.n(B),
        I = a(2),
        R = a(22),
        A = a.n(R),
        M = a(23),
        F = a.n(M),
        U = a(37),
        T = a.n(U),
        P = a(24),
        H = a.n(P),
        W = [
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
                    Object(v.a)(Object(v.a)(a))
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
                      var e = [A.a, F.a, T.a, H.a],
                        t = [F.a, T.a, H.a, A.a],
                        a = [T.a, H.a, A.a, F.a],
                        n = function(e) {
                          return e.map(function(e, t) {
                            return i.a.createElement(
                              'div',
                              { className: 'carousel-item', key: t },
                              i.a.createElement('img', {
                                id: 'bookImage',
                                className: 'd-block',
                                src: e,
                                alt: 'book'
                              })
                            );
                          });
                        };
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(I.a.NavBar, null),
                        i.a.createElement(I.a.Header, null),
                        i.a.createElement(I.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: i.a.createElement(
                            'div',
                            { className: 'container-fluid' },
                            i.a.createElement(
                              'div',
                              { className: 'row justify-content-center' },
                              i.a.createElement(
                                'div',
                                {
                                  id: 'bookGallery',
                                  className:
                                    'row flex-fill py-5  justify-content-center'
                                },
                                i.a.createElement(
                                  'div',
                                  { className: 'col-3' },
                                  i.a.createElement(
                                    'div',
                                    {
                                      className: 'carousel slide',
                                      'data-ride': 'carousel'
                                    },
                                    i.a.createElement(
                                      'div',
                                      { className: 'carousel-inner' },
                                      i.a.createElement(
                                        'div',
                                        { className: 'carousel-item active' },
                                        i.a.createElement('img', {
                                          id: 'bookImage',
                                          className: 'd-block',
                                          src: H.a,
                                          alt: 'First slide'
                                        })
                                      ),
                                      n(e)
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-3' },
                                  i.a.createElement(
                                    'div',
                                    {
                                      className: 'carousel slide',
                                      'data-ride': 'carousel'
                                    },
                                    i.a.createElement(
                                      'div',
                                      { className: 'carousel-inner' },
                                      i.a.createElement(
                                        'div',
                                        { className: 'carousel-item active' },
                                        i.a.createElement('img', {
                                          id: 'bookImage',
                                          className: 'd-block',
                                          src: A.a,
                                          alt: 'First slide'
                                        })
                                      ),
                                      n(t)
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-3' },
                                  i.a.createElement(
                                    'div',
                                    {
                                      className: 'carousel slide ',
                                      'data-ride': 'carousel'
                                    },
                                    i.a.createElement(
                                      'div',
                                      { className: 'carousel-inner ' },
                                      i.a.createElement(
                                        'div',
                                        { className: 'carousel-item  active' },
                                        i.a.createElement('img', {
                                          id: 'bookImage',
                                          className: 'd-block',
                                          src: F.a,
                                          alt: 'First slide'
                                        })
                                      ),
                                      n(a)
                                    )
                                  )
                                )
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  id: 'intro1',
                                  className:
                                    'row flex-fill p-5 justify-content-center'
                                },
                                i.a.createElement(
                                  'div',
                                  { className: 'col-1 mx-auto mr-1' },
                                  i.a.createElement('img', {
                                    className: 'd-block',
                                    src: N.a,
                                    alt: 'Third slide'
                                  })
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-8 mx-auto' },
                                  i.a.createElement(
                                    'h2',
                                    null,
                                    'LitLister is the future of buying and selling books for college students. Selling your old textbooks has never been faster or easier.'
                                  )
                                )
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  id: 'intro2',
                                  className:
                                    'row flex-fill pt-3 justify-content-center'
                                },
                                i.a.createElement(
                                  'h1',
                                  null,
                                  'Safe. Fast. Easy.'
                                )
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  id: 'intro2',
                                  className:
                                    'row flex-fill mt-0 pb-2 justify-content-center'
                                },
                                i.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'col-2 mx-auto  justify-content-center'
                                  },
                                  i.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: k.a,
                                    alt: 'book'
                                  }),
                                  i.a.createElement(
                                    'h3',
                                    null,
                                    'List your book for sale on our site. You can either sell it at a set price or sell it as an auction.'
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-2 mx-auto' },
                                  i.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: C.a,
                                    alt: 'chat'
                                  }),
                                  i.a.createElement(
                                    'h3',
                                    null,
                                    'After your book has been bought, choose a place on campus to meet.'
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-2 mx-auto' },
                                  i.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: S.a,
                                    alt: 'map'
                                  }),
                                  i.a.createElement(
                                    'h3',
                                    null,
                                    'Exchange books and take a small convenient code given by your buyer to prove they have it.'
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-2 mx-auto' },
                                  i.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: x.a,
                                    alt: 'thumb'
                                  }),
                                  i.a.createElement(
                                    'h3',
                                    null,
                                    'Go home happy. There is no need to handle cash or anything. We handle the entire payment process online to make sure you get paid.'
                                  )
                                )
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  id: 'intro3',
                                  className:
                                    'row flex-fill py-3 justify-content-center'
                                },
                                i.a.createElement(
                                  'h1',
                                  null,
                                  'Buying has never. been. easier.'
                                )
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  id: 'intro3',
                                  className:
                                    'row flex-fill p-3 justify-content-center'
                                },
                                i.a.createElement(
                                  'div',
                                  { className: 'col-2' },
                                  i.a.createElement('img', {
                                    className: 'mx-auto',
                                    src: L.a,
                                    alt: 'shield'
                                  })
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-8 align-middle my-auto' },
                                  i.a.createElement(
                                    'h3',
                                    null,
                                    'Buy books with ease. We handle the payment process. We also make sure you get the book you bought. We provide a moneyback guarantee with every purchase.'
                                  )
                                )
                              )
                            )
                          )
                        }),
                        i.a.createElement(I.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        J = a(31),
        V = a(13),
        q = a(8),
        G = [
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
                    q.a.getRegister().then(function(e) {
                      e.ok || (window.location = '/');
                    });
                  }),
                  (a.onChange = function(e) {
                    a.setState(Object(V.a)({}, e.target.name, e.target.value));
                  }),
                  (a.onSubmit = function(e) {
                    e.preventDefault(),
                      q.a
                        .postRegister(
                          a.state.firstname,
                          a.state.lastname,
                          a.state.email,
                          a.state.password
                        )
                        .then(function(e) {
                          e.ok ? (window.location = '/') : console.log(e);
                        });
                  }),
                  (a.render = function() {
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(I.a.NavBar, null),
                      i.a.createElement(I.a.Body, {
                        noSideBar: !a.state.showSideBar,
                        content: i.a.createElement(
                          'div',
                          {
                            className: 'container',
                            style: { minHeight: '68vh', marginTop: '12vh' }
                          },
                          i.a.createElement(
                            'form',
                            null,
                            i.a.createElement(
                              'div',
                              { className: 'form-group' },
                              i.a.createElement(
                                'div',
                                { className: 'form-group row' },
                                i.a.createElement(
                                  'label',
                                  {
                                    className: 'col-sm-6',
                                    htmlFor: 'form-first-name'
                                  },
                                  'First Name'
                                ),
                                i.a.createElement(
                                  'label',
                                  {
                                    className: 'col-sm-6',
                                    htmlFor: 'form-last-name'
                                  },
                                  'Last Name'
                                )
                              ),
                              i.a.createElement(
                                'div',
                                { className: 'form-group row' },
                                i.a.createElement('input', {
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
                                i.a.createElement('input', {
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
                            i.a.createElement(
                              'div',
                              { className: 'form-group' },
                              i.a.createElement(
                                'label',
                                { htmlFor: 'form-email' },
                                'Email address'
                              ),
                              i.a.createElement('input', {
                                type: 'email',
                                className: 'form-control',
                                id: 'form-email',
                                placeholder: 'Enter email',
                                name: 'email',
                                value: a.state.email,
                                onChange: a.onChange
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-group' },
                              i.a.createElement(
                                'label',
                                { htmlFor: 'form-password' },
                                'Password'
                              ),
                              i.a.createElement('input', {
                                type: 'password',
                                className: 'form-control',
                                id: 'form-password',
                                placeholder: 'Password',
                                name: 'password',
                                value: a.state.password,
                                onChange: a.onChange
                              })
                            ),
                            i.a.createElement(
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
                      i.a.createElement(I.a.Footer, null)
                    );
                  }),
                  (a.state = {
                    showSideBar: !1,
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                  }),
                  (a.onChange = a.onChange.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.onSubmit = a.onSubmit.bind(Object(v.a)(Object(v.a)(a)))),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(l.Component)
          }
        ],
        _ = (a(129),
        [
          {
            path: '/Contact',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(b.a)(
                    this,
                    Object(h.a)(t).call(this, e)
                  )).state = { showSideBar: !1 }),
                  a
                );
              }
              return (
                Object(f.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(I.a.NavBar, null),
                        i.a.createElement(I.a.Header, null),
                        i.a.createElement(I.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: i.a.createElement(
                            'div',
                            { className: 'container-fluid h-100 main-Page' },
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'row text-center float-load justify-content-center'
                              },
                              i.a.createElement(
                                'div',
                                { className: 'big-Text mt-4' },
                                'Have Any Questions?'
                              ),
                              i.a.createElement(
                                'p',
                                { className: 'm-4' },
                                'If you have any questions or suggestions for us feel free to shoot us an email at',
                                i.a.createElement(
                                  'b',
                                  null,
                                  ' contact@litlister.com'
                                ),
                                i.a.createElement('br', null),
                                'We will get back to you as soon as we can.'
                              )
                            )
                          )
                        }),
                        i.a.createElement(I.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ]),
        Q = !1,
        z = {
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
        X = (function(e) {
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
                return Q
                  ? i.a.createElement(
                      'div',
                      { className: 'container' },
                      a.pagination(a.state.page, 9),
                      a.result(z.data),
                      a.pagination(a.state.page, 9)
                    )
                  : null === a.state.pageCount
                  ? i.a.createElement(I.a.Body.Loading, null)
                  : i.a.createElement(
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
                  var n = i.a.createElement(
                      'li',
                      { className: 'page-item active' },
                      i.a.createElement(
                        'a',
                        { className: 'page-link', href: '# ' },
                        e
                      )
                    ),
                    r =
                      1 !== e &&
                      i.a.createElement(
                        'li',
                        { className: 'page-item' },
                        i.a.createElement(
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
                      i.a.createElement(
                        'li',
                        { className: 'page-item' },
                        i.a.createElement(
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
                    l = e - 1,
                    c = t - e,
                    s = [],
                    m = [],
                    u = -3;
                  u < 0;
                  u++
                )
                  l + u < 0 ||
                    s.push(
                      i.a.createElement(
                        'li',
                        { key: e + u, className: 'page-item' },
                        i.a.createElement(
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
                  c - d < 0 ||
                    m.push(
                      i.a.createElement(
                        'li',
                        { key: e + d, className: 'page-item' },
                        i.a.createElement(
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
                return i.a.createElement(
                  'nav',
                  { 'aria-label': 'Page navigation' },
                  i.a.createElement(
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
                if ((e.preventDefault(), Q))
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
                      return i.a.createElement(
                        'div',
                        { className: 'container', key: t },
                        i.a.createElement(
                          'div',
                          { className: 'row mt-3' },
                          i.a.createElement(
                            'div',
                            { className: 'col-3 text-center' },
                            i.a.createElement('img', {
                              src: e.pictureurl,
                              className: 'img-fluid',
                              alt: 'fluid'
                            })
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col' },
                            i.a.createElement('h3', null, e.title),
                            i.a.createElement('h4', null, e.description)
                          )
                        )
                      );
                    })
                  : i.a.createElement(
                      'div',
                      { className: 'container mt-3' },
                      i.a.createElement('br', null),
                      i.a.createElement('h2', null, 'no result :('),
                      i.a.createElement('br', null)
                    );
              }),
              (a.render = function() {
                return i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(I.a.NavBar, {
                    category: a.state.category,
                    query: a.state.query
                  }),
                  i.a.createElement(I.a.Header, null),
                  i.a.createElement(I.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(I.a.Footer, null)
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
              l = n.title;
            return (
              r
                ? ((a.state.category = 'author'),
                  (a.state.search = q.c.getSearchByAuthor),
                  (a.state.query = r))
                : o
                ? ((a.state.category = 'isbn'),
                  (a.state.search = q.c.getSearchByIsbn),
                  (a.state.query = o))
                : l &&
                  ((a.state.category = 'title'),
                  (a.state.search = q.c.getSearchByTitle),
                  (a.state.query = l)),
              (a.bodyContent = a.bodyContent.bind(Object(v.a)(Object(v.a)(a)))),
              (a.pagination = a.pagination.bind(Object(v.a)(Object(v.a)(a)))),
              (a.onPageChange = a.onPageChange.bind(
                Object(v.a)(Object(v.a)(a))
              )),
              (a.result = a.result.bind(Object(v.a)(Object(v.a)(a)))),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(l.Component),
        Y = [
          {
            path: '/search/author/:author/page/:page',
            exact: !0,
            component: X
          },
          { path: '/search/isbn/:isbn/page/:page', exact: !0, component: X },
          { path: '/search/title/:title/page/:page', exact: !0, component: X }
        ],
        Z = 'Once upon',
        K = 'this book is about',
        $ = 'Seller@mail.sfsu.edu',
        ee = 'used',
        te = '$8.99',
        ae = [
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
                    Object(v.a)(Object(v.a)(a))
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
                      var e = i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(
                          'div',
                          { className: 'container' },
                          i.a.createElement(
                            'div',
                            { className: 'row-1' },
                            i.a.createElement(
                              'div',
                              { className: 'col-6' },
                              i.a.createElement('img', {
                                className: 'd-block w-100',
                                src:
                                  'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
                                alt: 'placeholder'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'col-6' },
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Title: ',
                                Z
                              ),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Description: ',
                                K
                              ),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'SellerInfo: ',
                                $
                              ),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Book State: ',
                                ee
                              ),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Price: ',
                                te
                              )
                            )
                          )
                        )
                      );
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(I.a.NavBar, null),
                        i.a.createElement(I.a.Header, null),
                        i.a.createElement(I.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: e
                        }),
                        i.a.createElement(I.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        ne = (a(130), !0),
        re = ['Once upon'],
        oe = {
          BookTitle: 'Once upon',
          Description:
            'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven\u2019t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle\u2014average\u2014is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation\u2019s economic future, it will be impossible to ignore.\u201d',
          pictureurl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
        },
        le = [
          {
            path: '/user/:uid/listing/:lid',
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
                    ne && a.setState({ renderReady: !0 });
                  }),
                  (a.autoCompleteSearch = function(e) {
                    console.log(e);
                  }),
                  (a.onChange = function(e) {
                    return a.setState(
                      Object(V.a)({}, e.target.name, e.target.value)
                    );
                  }),
                  (a.onChangeSearch = function(e) {
                    ne &&
                      a.setState({
                        search: e.target.value,
                        searchSuggestion: i.a.createElement(
                          'ul',
                          null,
                          re.map(function(t, n) {
                            return '' !== e.target.value &&
                              t
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase())
                              ? i.a.createElement(
                                  'li',
                                  { key: n, onClick: a.onSuggestion, value: t },
                                  t
                                )
                              : i.a.createElement('div', { key: n });
                          })
                        )
                      });
                  }),
                  (a.onImageUpload = function(e) {
                    var t = a.state,
                      n = t.listerImages,
                      r = t.listerImageCapacity,
                      o = n,
                      l = 0;
                    o.length < r &&
                      (o.push(URL.createObjectURL(e.target.files[0])),
                      (l = o.length - 1)),
                      a.setState({
                        listerImages: o,
                        listerImageDisplayIndex: l
                      });
                  }),
                  (a.onShowOrHide = function(e) {
                    return a.setState({ showSideBar: !a.state.showSideBar });
                  }),
                  (a.onSuggestion = function(e) {
                    e.target.getAttribute('value'),
                      ne && a.setState({ bookData: oe });
                  }),
                  (a.renderSearch = function() {
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        'form',
                        null,
                        i.a.createElement(
                          'div',
                          { className: 'form-group' },
                          i.a.createElement('div', null, 'Search'),
                          i.a.createElement('input', {
                            value: a.state.search,
                            onChange: a.onChangeSearch,
                            name: 'search',
                            autoComplete: 'off'
                          }),
                          a.state.searchSuggestion
                        )
                      )
                    );
                  }),
                  (a.renderListingForm = function() {
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'col-6' },
                        i.a.createElement('img', {
                          className: 'd-block w-100',
                          src: a.state.bookData.pictureurl,
                          alt: 'placeholder'
                        })
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col-6' },
                        i.a.createElement(
                          'div',
                          null,
                          i.a.createElement(
                            'form',
                            null,
                            i.a.createElement(
                              'div',
                              { className: 'row' },
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Title: ',
                                oe.BookTitle,
                                i.a.createElement(
                                  'div',
                                  { className: 'text-default' },
                                  'Description: ',
                                  oe.Description
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'form-group' },
                                  i.a.createElement(
                                    'label',
                                    { htmlFor: 'form-email' },
                                    'User description'
                                  ),
                                  i.a.createElement('input', {
                                    type: 'userDescription',
                                    className: 'form-control',
                                    id: 'form-userDescription',
                                    placeholder: 'Enter book description',
                                    name: 'userDescription',
                                    value: a.state.userDescription,
                                    onChange: a.onChange
                                  })
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'form-group' },
                                  i.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    a.state.listerImages.map(function(e, t) {
                                      return i.a.createElement(
                                        'div',
                                        { className: 'col', key: t },
                                        i.a.createElement('img', {
                                          className: 'img-fuild',
                                          src: e
                                        })
                                      );
                                    })
                                  ),
                                  i.a.createElement(
                                    'div',
                                    { class: 'upload-btn-wrapper' },
                                    i.a.createElement(
                                      'button',
                                      { class: 'img-btn' },
                                      '+'
                                    ),
                                    i.a.createElement('input', {
                                      type: 'file',
                                      onChange: a.onImageUpload
                                    }),
                                    a.state.listerImageDisplayIndex &&
                                      i.a.createElement('img', {
                                        className: 'img-fluid',
                                        src:
                                          a.state.listerImages[
                                            a.state.listerImageDisplayIndex
                                          ]
                                      })
                                  )
                                )
                              )
                            ),
                            i.a.createElement(
                              'button',
                              {
                                type: 'submit',
                                className: 'btn btn-primary',
                                onClick: a.onSubmit
                              },
                              'Submit'
                            )
                          ),
                          i.a.createElement(
                            'h1',
                            null,
                            a.state.uid,
                            ' ',
                            a.state.lid
                          )
                        )
                      )
                    );
                  }),
                  (a.state = {
                    uid: e.match.params.uid,
                    lid: e.match.params.lid,
                    showSideBar: !1,
                    search: '',
                    searchSuggestion: i.a.createElement('ul', null),
                    bookData: null,
                    userDescription: '',
                    listData: null,
                    listerImages: [],
                    listerImageDisplayIndex: null,
                    listerImageCapacity: 5,
                    renderReady: !1
                  }),
                  (a.onShowOrHide = a.onShowOrHide.bind(
                    Object(v.a)(Object(v.a)(a))
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
                      var e = i.a.createElement(
                        i.a.Fragment,
                        null,
                        this.state.renderReady
                          ? i.a.createElement(
                              'div',
                              null,
                              i.a.createElement(
                                'div',
                                { className: 'container' },
                                i.a.createElement(
                                  'div',
                                  { className: 'row-1' },
                                  this.state.bookData
                                    ? this.renderListingForm()
                                    : this.renderSearch()
                                )
                              )
                            )
                          : i.a.createElement(I.a.Body.Loading, null)
                      );
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(I.a.NavBar, null),
                        i.a.createElement(I.a.Header, null),
                        i.a.createElement(I.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: e
                        }),
                        i.a.createElement(I.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        ie = a(78),
        ce = (a(131),
        (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).componentWillReceiveProps = function(e) {
                a.setState({ logData: e.logData });
              }),
              (a.componentDidMount = function() {
                a.ps = new ie.a(s.a.findDOMNode(Object(v.a)(Object(v.a)(a))));
                var e = s.a.findDOMNode(Object(v.a)(Object(v.a)(a)))
                  .clientHeight;
                (s.a.findDOMNode(Object(v.a)(Object(v.a)(a))).scrollTop = e),
                  a.ps.update(),
                  s.a.findDOMNode(Object(v.a)(Object(v.a)(a))).scrollTo(0, e);
              }),
              (a.componentDidUpdate = function(e) {
                (s.a.findDOMNode(
                  Object(v.a)(Object(v.a)(a))
                ).scrollTop = s.a.findDOMNode(
                  Object(v.a)(Object(v.a)(a))
                ).scrollHeight),
                  a.ps.update();
              }),
              (a.render = function() {
                return i.a.createElement(
                  'div',
                  { className: 'border' },
                  a.state.logData.map(function(e, t) {
                    return i.a.createElement(
                      'p',
                      { className: 'text-dark mx-4', key: t },
                      ' ',
                      e,
                      ' '
                    );
                  })
                );
              }),
              (a.state = { logData: e.logData }),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(l.Component)),
        se = (a(132), !0),
        me = {
          bookData: {
            title: 'book1',
            isbn: '111-111-111',
            authors: ['Adam Bob', 'Calvin Dan'],
            rating: 2.5,
            description: 'nothing, you are on debug mode',
            pictureurl:
              'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
          },
          listData: {
            seller: 'charlie',
            rating: 5,
            condition: 'new',
            price: 11.09,
            description:
              'I bought the wrong book, and I missed the return deadline.'
          },
          logData: [
            'bob: Hi, Im interested in buying your listing.',
            'charlie: thank you for your interest. Do you have any questions regarding to my listing?',
            'bob: ya, you listed the textbook as 80, but I only have 40.',
            "charlie: oh I'm sry. The price is firm.",
            'bob: could you lower it a bit?',
            'charlie: I bought the book at 240 and I hardly use it. tbf 80 is already a steal',
            'bob: im a single parent, and balancing between education, job, and parenting has been taking a huge toll on both my mental and physical stability, could you lower the price a bit? please?',
            'charlie: I guess I can lower it to 75, but no more lower than that as 80 already was a steal',
            'bob: only 5 bucks? Please lower it more! My son has cancer!',
            'charlie: iM sOrrY thAt yOuR sOn HaS cANcEr, bUT iCAnT loWeR iT aNyMoRe tHan 75',
            'bob: why are you typing like that? Is this a joke to you?',
            'charlie: no, ofc not, my keyboard broke and iT MirAcuLoUSly fiXEd iTself, oh gdi',
            'bob: get f-ed'
          ]
        },
        ue = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).componentDidMount = function() {
                if (se) {
                  var e = me.bookData,
                    t = me.listData,
                    n = me.logData;
                  a.setState({
                    bookData: e,
                    listData: t,
                    logData: n,
                    renderReady: !0
                  });
                } else {
                  var r = a.state,
                    o = r.uid,
                    l = r.cid;
                  q.e.getUserChatLog({ uid: o, cid: l }).then(function(e) {
                    var t = e.bookData,
                      n = e.listData,
                      r = e.logData;
                    return a.setState({
                      bookData: t,
                      listData: n,
                      logData: r,
                      renderReady: !0
                    });
                  });
                }
              }),
              (a.onChange = function(e) {
                a.setState(Object(V.a)({}, e.target.name, e.target.value));
              }),
              (a.onMessageReceived = function(e) {
                var t = a.state.logData;
                t.push(e), a.setState({ logData: t });
              }),
              (a.onSubmit = function(e) {
                if ((e.preventDefault(), se)) {
                  var t = a.state,
                    n = t.logData,
                    r = t.message;
                  n.push(r), a.setState({ logData: n, message: '' });
                } else {
                  var o = a.state,
                    l = o.uid,
                    i = o.cid,
                    c = o.message;
                  q.e.postUserChatLog({ uid: l, cid: i, message: c }),
                    a.setState({ message: '' });
                }
              }),
              (a.bodyContent = function() {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  a.state.renderReady
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        a.itemInfo(),
                        a.chatContainer()
                      )
                    : i.a.createElement(I.a.Body.Loading, null)
                );
              }),
              (a.itemInfo = function() {
                return i.a.createElement(
                  'div',
                  { className: 'row my-4' },
                  i.a.createElement('div', { className: 'col-1' }),
                  i.a.createElement(
                    'div',
                    { className: 'col' },
                    i.a.createElement('h1', null, 'Book Information'),
                    i.a.createElement(
                      'div',
                      { className: 'row mt-3' },
                      i.a.createElement(
                        'div',
                        { className: 'col-3' },
                        i.a.createElement('img', {
                          className: 'img-fluid',
                          src: a.state.bookData.pictureurl,
                          alt: 'cover'
                        })
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col mt-3' },
                        i.a.createElement('h1', null, a.state.bookData.title),
                        i.a.createElement(
                          'h5',
                          null,
                          'author(s):',
                          ' ',
                          a.state.bookData.authors.map(function(e, t) {
                            return i.a.createElement(
                              'span',
                              { key: t },
                              (0 === t ? ' ' : ', ') + e
                            );
                          })
                        ),
                        i.a.createElement(
                          'span',
                          null,
                          'isbn: ',
                          a.state.bookData.isbn
                        ),
                        i.a.createElement('br', null),
                        i.a.createElement(
                          'div',
                          { className: 'row' },
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            'rating:'
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            i.a.createElement(I.a.Body.RatingStar, {
                              rating: a.state.bookData.rating,
                              dimension: 12
                            })
                          )
                        ),
                        i.a.createElement(
                          'h6',
                          null,
                          a.state.bookData.description
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'col' },
                    i.a.createElement('h1', null, 'Listing Information'),
                    i.a.createElement(
                      'div',
                      { className: 'row my-3' },
                      i.a.createElement('div', { className: 'col-1' }),
                      i.a.createElement(
                        'div',
                        { className: 'col' },
                        i.a.createElement(
                          'h5',
                          null,
                          'Seller: ',
                          a.state.listData.seller
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'row' },
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            'rating:'
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            i.a.createElement(I.a.Body.RatingStar, {
                              rating: a.state.listData.rating,
                              dimension: 12
                            })
                          )
                        ),
                        i.a.createElement('br', null),
                        i.a.createElement(
                          'h6',
                          null,
                          'condition: ',
                          a.state.listData.condition
                        ),
                        i.a.createElement(
                          'h6',
                          null,
                          'price: ',
                          a.state.listData.price
                        ),
                        i.a.createElement(
                          'h6',
                          null,
                          'description: ',
                          a.state.listData.description
                        )
                      ),
                      i.a.createElement('div', { className: 'col-2' })
                    )
                  ),
                  i.a.createElement('div', { className: 'col-1' })
                );
              }),
              (a.chatContainer = function() {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    'div',
                    { className: 'row m-4' },
                    i.a.createElement('div', { className: 'col-1' }),
                    i.a.createElement(
                      'div',
                      { className: 'col' },
                      i.a.createElement('h1', null, 'ChatLog')
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'row m-4' },
                    i.a.createElement('div', { className: 'col-1' }),
                    i.a.createElement(
                      'div',
                      { className: 'col' },
                      i.a.createElement(ce, { logData: a.state.logData })
                    ),
                    i.a.createElement('div', { className: 'col-1' })
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'row m-4' },
                    i.a.createElement('div', { className: 'col-1' }),
                    i.a.createElement(
                      'div',
                      { className: 'col' },
                      i.a.createElement(
                        'form',
                        null,
                        i.a.createElement(
                          'div',
                          { className: 'input-group' },
                          i.a.createElement('input', {
                            type: 'text',
                            className:
                              'form-control litlister-remove-focus-outline',
                            placeholder: 'type your message here',
                            name: 'message',
                            value: a.state.message,
                            onChange: a.onChange
                          }),
                          i.a.createElement(
                            'div',
                            { className: 'input-group-append' },
                            i.a.createElement(
                              'button',
                              {
                                className:
                                  'input-group-text bg-success text-light',
                                onClick: a.onSubmit
                              },
                              'Send'
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement('div', { className: 'col-1' })
                  )
                );
              }),
              (a.render = function() {
                return i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(I.a.NavBar, null),
                  i.a.createElement(I.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(I.a.Footer, null)
                );
              }),
              (a.state = {
                uid: e.match.params.uid,
                cid: e.match.params.cid,
                bookData: null,
                listData: null,
                logData: [],
                message: '',
                renderReady: !1
              }),
              q.f.on(
                ''.concat(a.state.cid, ':messageReceived'),
                a.onMessageReceived
              ),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(l.Component),
        de = !0,
        pe = {
          data: {
            generalInfo: {
              firstname: 'Qwerty',
              lastname: 'Asdfg',
              email: 'qwe@asd.zxc'
            },
            buyerInfo: {},
            sellerInfo: {}
          }
        },
        ge = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).componentDidMount = function() {
                de
                  ? a.setState({
                      renderReady: !0,
                      firstname: pe.data.generalInfo.firstname,
                      lastname: pe.data.generalInfo.lastname,
                      email: pe.data.generalInfo.email
                    })
                  : q.e
                      .getUserConfiguration(a.props.match.params.uid)
                      .then(function(e) {
                        return a.setState({
                          renderReady: !0,
                          firstname: e.generalInfo.firstname,
                          lastname: e.generalInfo.lastname,
                          email: e.generalInfo.email
                        });
                      });
              }),
              (a.bodyContent = function() {
                return a.state.renderReady
                  ? i.a.createElement(
                      'div',
                      { className: 'row' },
                      i.a.createElement('div', { className: 'col-2' }),
                      i.a.createElement(
                        'div',
                        { className: 'col' },
                        i.a.createElement(
                          'form',
                          { className: 'm-4' },
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('h1', null, 'User Configuration')
                          ),
                          i.a.createElement('br', null),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('h2', null, 'General Info')
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement(
                              'div',
                              { className: 'form-group row' },
                              i.a.createElement(
                                'label',
                                {
                                  className: 'col-sm-6',
                                  htmlFor: 'form-first-name'
                                },
                                'First Name'
                              ),
                              i.a.createElement(
                                'label',
                                {
                                  className: 'col-sm-6',
                                  htmlFor: 'form-last-name'
                                },
                                'Last Name'
                              )
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-group row' },
                              i.a.createElement('input', {
                                type: 'text',
                                className: 'form-control col',
                                id: 'form-first-name',
                                placeholder: 'Enter  first name',
                                name: 'firstname',
                                value: a.state.firstname,
                                onChange: a.onChange,
                                style: { marginLeft: '1em', marginRight: '1em' }
                              }),
                              i.a.createElement('input', {
                                type: 'text',
                                className: 'form-control col',
                                id: 'form-last-name',
                                placeholder: 'Enter last name',
                                name: 'lastname',
                                value: a.state.lastname,
                                onChange: a.onChange,
                                style: { marginLeft: '1em', marginRight: '1em' }
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement(
                              'label',
                              { htmlFor: 'form-email' },
                              'Email address'
                            ),
                            i.a.createElement('input', {
                              type: 'email',
                              className: 'form-control',
                              id: 'form-email',
                              placeholder: 'Enter email',
                              name: 'email',
                              value: a.state.email,
                              onChange: a.onChange
                            })
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('h2', null, 'Buyer Info')
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('h2', null, 'Seller Info')
                          ),
                          i.a.createElement(
                            'button',
                            {
                              type: 'submit',
                              className: 'btn btn-success',
                              onClick: a.onSubmit
                            },
                            'Update User Configuration'
                          )
                        )
                      ),
                      i.a.createElement('div', { className: 'col-2' })
                    )
                  : i.a.createElement(I.a.Body.Loading, null);
              }),
              (a.onChange = function(e) {
                a.setState(Object(V.a)({}, e.target.name, e.target.value));
              }),
              (a.onSubmit = function(e) {
                e.preventDefault(),
                  q.e
                    .postUserConfiguration({
                      uid: a.props.match.params.uid,
                      configuration: {
                        generalInfo: {
                          firstname: a.state.firstname,
                          lastname: a.state.lastname,
                          email: a.state.lastname
                        },
                        buyerInfo: {},
                        sellerInfo: {}
                      }
                    })
                    .then(function(e) {
                      e.ok ? (window.location = './') : console.log(e);
                    });
              }),
              (a.render = function() {
                return i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(I.a.NavBar, null),
                  i.a.createElement(I.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(I.a.Footer, null)
                );
              }),
              (a.state = {
                showSideBar: !1,
                firstname: '',
                lastname: '',
                email: '',
                renderReady: !1
              }),
              (a.bodyContent = a.bodyContent.bind(Object(v.a)(Object(v.a)(a)))),
              (a.onChange = a.onChange.bind(Object(v.a)(Object(v.a)(a)))),
              (a.onSubmit = a.onSubmit.bind(Object(v.a)(Object(v.a)(a)))),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(l.Component),
        be = !0,
        he = {
          profileData: {
            firstname: 'Bob',
            lastname: 'Ross',
            email: 'fake@email.domain',
            rating: 4.3,
            pictureurl:
              'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            description:
              'this is a placeholder account. Turn off debug to switch to an actual profile.'
          },
          chatListData: [
            {
              cid: 24,
              sender: 'jimmy99',
              lastMessage: 'Hi',
              time: '14:22 24-03-2019'
            },
            {
              cid: 12,
              sender: 'looking4FreeBooks',
              lastMessage: 'Heyy',
              time: '10:02 22-03-2019'
            },
            {
              cid: 16,
              sender: 'yourDad',
              lastMessage: 'Hello',
              time: '06:12 16-03-2019'
            },
            {
              cid: 39,
              sender: 'xXxpageDestroyerxXx',
              lastMessage: 'Yo',
              time: '23:57 01-03-2019'
            }
          ]
        },
        fe = [
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
                    if (be)
                      a.setState({
                        chatListData: he.chatListData,
                        profileData: he.profileData,
                        display: 'Profile'
                      });
                    else {
                      var e = a.state.uid;
                      q.e.getUserProfile(e).then(function(t) {
                        t.error
                          ? (window.location = '/404')
                          : q.e.getUserChatList(e).then(function(e) {
                              return a.setState({
                                chatListData: e,
                                profileData: t,
                                display: 'Profile'
                              });
                            });
                      });
                    }
                  }),
                  (a.bodyContent = function() {
                    var e = a.state.guest;
                    return i.a.createElement(
                      'div',
                      null,
                      a.state.display
                        ? i.a.createElement(
                            'div',
                            {
                              className: 'container',
                              style: {
                                minHeight: '68vh',
                                marginTop: '8vh',
                                paddingBottom: '8vh'
                              }
                            },
                            i.a.createElement(
                              'div',
                              { className: 'row' },
                              a.profileSideBar({ guest: e }),
                              i.a.createElement(
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
                        : i.a.createElement(I.a.Body.Loading, null)
                    );
                  }),
                  (a.profileSideBar = function(e) {
                    var t = e.guest;
                    return i.a.createElement(
                      'div',
                      { className: 'col-3', style: { marginTop: '2em' } },
                      i.a.createElement('img', {
                        src: a.state.profileData.pictureurl,
                        className: 'img-fluid img-thumbnail',
                        alt: 'profile',
                        style: {
                          borderBottomWidth: '0',
                          borderBottomLeftRadius: '0',
                          borderBottomRightRadius: '0'
                        }
                      }),
                      i.a.createElement(
                        'ul',
                        { className: 'list-group' },
                        i.a.createElement(
                          'li',
                          {
                            className: 'list-group-item text-center',
                            style: {
                              borderTopWidth: '0',
                              borderTopLeftRadius: '0',
                              borderTopRightRadius: '0'
                            }
                          },
                          i.a.createElement(
                            'h3',
                            null,
                            a.state.profileData.firstname,
                            ' ',
                            a.state.profileData.lastname
                          ),
                          a.state.profileData.rating &&
                            a.displayRating(a.state.profileData.rating)
                        ),
                        i.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            name: 'Message',
                            onClick: a.onMessage
                          },
                          i.a.createElement('i', {
                            className: 'fa fa-envelope'
                          }),
                          ' Message'
                        ),
                        i.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            name: 'Review',
                            onClick: a.onReview
                          },
                          i.a.createElement('i', { className: 'fa fa-star' }),
                          ' Review'
                        ),
                        i.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            name: 'Listing',
                            onClick: a.onListing
                          },
                          i.a.createElement('i', { className: 'fa fa-list' }),
                          ' Listing'
                        ),
                        t
                          ? i.a.createElement(
                              'button',
                              {
                                type: 'button',
                                className:
                                  'list-group-item list-group-item-action',
                                onClick: a.onReport
                              },
                              i.a.createElement('i', {
                                className: 'fa fa-flag'
                              }),
                              ' Report'
                            )
                          : i.a.createElement(
                              'button',
                              {
                                type: 'button',
                                className:
                                  'list-group-item list-group-item-action',
                                onClick: a.onConfigure
                              },
                              i.a.createElement('i', {
                                className: 'fa fa-cogs'
                              }),
                              ' Configure'
                            )
                      )
                    );
                  }),
                  (a.userNavigation = function() {
                    return i.a.createElement(
                      'ul',
                      { className: 'nav justify-content-center nav-tabs' },
                      ['Profile', 'Message', 'Review', 'Listing'].map(function(
                        e,
                        t
                      ) {
                        return a.state.display === e
                          ? i.a.createElement(
                              'li',
                              { key: t, className: 'nav-item' },
                              i.a.createElement(
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
                          : i.a.createElement(
                              'li',
                              { key: t, className: 'nav-item' },
                              i.a.createElement(
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
                    var t = a.state,
                      n = t.display,
                      r = t.profileData,
                      o = t.chatListData,
                      l = t.uid;
                    return 'Profile' === n
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement('br', null),
                          i.a.createElement('h2', null, 'Profile'),
                          i.a.createElement('div', null, r.description)
                        )
                      : 'Message' === n
                      ? i.a.createElement(
                          'div',
                          null,
                          i.a.createElement('br', null),
                          o.map(function(e, t) {
                            return i.a.createElement(
                              'div',
                              { className: 'row', key: t },
                              i.a.createElement(
                                'div',
                                { class: 'col' },
                                i.a.createElement(
                                  'div',
                                  {
                                    className: 'card',
                                    onClick: function(t) {
                                      return (window.location = './'
                                        .concat(l, '/chat/')
                                        .concat(e.cid));
                                    }
                                  },
                                  i.a.createElement(
                                    'div',
                                    { className: 'card-body' },
                                    i.a.createElement(
                                      'h5',
                                      { className: 'card-title' },
                                      e.sender
                                    ),
                                    i.a.createElement(
                                      'p',
                                      { className: 'card-text text-dark' },
                                      e.time
                                    ),
                                    i.a.createElement(
                                      'p',
                                      { className: 'card-text' },
                                      e.lastMessage
                                    )
                                  )
                                )
                              )
                            );
                          })
                        )
                      : 'Review' === n
                      ? i.a.createElement(
                          'div',
                          null,
                          i.a.createElement('br', null),
                          'to do'
                        )
                      : 'Listing' === n
                      ? i.a.createElement(
                          'div',
                          null,
                          i.a.createElement('br', null),
                          'to do'
                        )
                      : void 0;
                  }),
                  (a.displayRating = function(e) {
                    return i.a.createElement(
                      'span',
                      null,
                      i.a.createElement('br', null),
                      i.a.createElement(I.a.Body.RatingStar, { rating: e })
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
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(I.a.NavBar, null),
                      i.a.createElement(I.a.Body, {
                        noSideBar: !a.state.showSideBar,
                        content: a.bodyContent()
                      }),
                      i.a.createElement(I.a.Footer, null)
                    );
                  }),
                  (a.state = {
                    guest: !0,
                    chatListData: [],
                    profileData: null,
                    display: null,
                    onUserNavigation: {
                      Profile: a.onProfile,
                      Message: a.onMessage,
                      Review: a.onReview,
                      Listing: a.onListing
                    },
                    renderReady: !1
                  }),
                  (a.bodyContent = a.bodyContent.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.profileSideBar = a.profileSideBar.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.userNavigation = a.userNavigation.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.userContent = a.userContent.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.displayRating = a.displayRating.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.onUserNavigation = a.onUserNavigation.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.onProfile = a.onProfile.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.onMessage = a.onMessage.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.onReview = a.onReview.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.onListing = a.onListing.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.onReport = a.onReport.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.onConfigure = a.onConfigure.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(l.Component)
          },
          { path: '/user/:uid/chat/:cid', exact: !0, component: ue },
          { path: '/user/:uid/configuration', exact: !0, component: ge }
        ],
        Ee = !0,
        ve = {
          data: {
            title: 'book1',
            isbn: '111-111-111',
            authors: ['Adam Bob', 'Calvin Dan'],
            rating: 2.5,
            description: 'nothing, you are on debug mode',
            pictureurl:
              'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
          }
        },
        ye = {
          data: {
            seller: 'dummy seller name',
            rating: 0.4,
            condition: 'new',
            price: 11.09,
            description:
              'I bought the wrong book, and I missed the return deadline.'
          }
        },
        Ne = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).componentDidMount = function() {
                Ee
                  ? a.setState({
                      bookData: ve.data,
                      listData: ye.data,
                      renderReady: !0
                    })
                  : q.b.getBookInfo(a.state.bid).then(function(e) {
                      return q.b.getListingInfo(a.state.lid).then(function(t) {
                        return a.setState({
                          bookData: e,
                          listData: t,
                          renderReady: !0
                        });
                      });
                    });
              }),
              (a.bodyContent = function() {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  a.state.renderReady
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        a.addToCart(),
                        a.bookInfo(),
                        a.listInfo()
                      )
                    : i.a.createElement(I.a.Body.Loading, null)
                );
              }),
              (a.addToCart = function() {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    'button',
                    { className: 'btn btn-warning float-right mr-5' },
                    i.a.createElement(
                      'h4',
                      null,
                      i.a.createElement('i', {
                        className: 'fa fa-shopping-cart'
                      }),
                      ' Add To Cart'
                    )
                  )
                );
              }),
              (a.bookInfo = function() {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement('h1', null, 'Book Information'),
                  i.a.createElement(
                    'div',
                    { className: 'row mt-3' },
                    i.a.createElement(
                      'div',
                      { className: 'col-3' },
                      i.a.createElement('img', {
                        className: 'img-fluid',
                        src: a.state.bookData.pictureurl,
                        alt: 'cover'
                      })
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'col mt-3' },
                      i.a.createElement('h1', null, a.state.bookData.title),
                      i.a.createElement(
                        'h5',
                        null,
                        'author(s):',
                        ' ',
                        a.state.bookData.authors.map(function(e, t) {
                          return i.a.createElement(
                            'span',
                            { key: t },
                            (0 === t ? ' ' : ', ') + e
                          );
                        })
                      ),
                      i.a.createElement(
                        'span',
                        null,
                        'isbn: ',
                        a.state.bookData.isbn
                      ),
                      i.a.createElement('br', null),
                      i.a.createElement(
                        'div',
                        { className: 'row' },
                        i.a.createElement(
                          'div',
                          { className: 'col-1' },
                          'rating:'
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'col-1' },
                          i.a.createElement(I.a.Body.RatingStar, {
                            rating: a.state.bookData.rating,
                            dimension: 12
                          })
                        )
                      ),
                      i.a.createElement('br', null),
                      i.a.createElement('br', null),
                      i.a.createElement(
                        'h6',
                        null,
                        a.state.bookData.description
                      )
                    )
                  )
                );
              }),
              (a.listInfo = function() {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement('h1', null, 'Listing Information'),
                  i.a.createElement(
                    'div',
                    { className: 'row my-3' },
                    i.a.createElement('div', { className: 'col-1' }),
                    i.a.createElement(
                      'div',
                      { className: 'col' },
                      i.a.createElement(
                        'h5',
                        null,
                        'Seller: ',
                        a.state.listData.seller
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'row' },
                        i.a.createElement(
                          'div',
                          { className: 'col-1' },
                          'rating:'
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'col-1' },
                          i.a.createElement(I.a.Body.RatingStar, {
                            rating: a.state.listData.rating,
                            dimension: 12
                          })
                        )
                      ),
                      i.a.createElement(
                        'h6',
                        null,
                        'condition: ',
                        a.state.listData.condition
                      ),
                      i.a.createElement(
                        'h6',
                        null,
                        'price: ',
                        a.state.listData.price
                      ),
                      i.a.createElement(
                        'h6',
                        null,
                        'description: ',
                        a.state.listData.description
                      )
                    ),
                    i.a.createElement('div', { className: 'col-2' })
                  )
                );
              }),
              (a.render = function() {
                return i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(I.a.NavBar, null),
                  i.a.createElement(I.a.Header, null),
                  i.a.createElement(I.a.Body, { content: a.bodyContent() }),
                  i.a.createElement(I.a.Footer, null)
                );
              }),
              (a.state = {
                bid: e.match.params.bid,
                lid: e.match.params.lid,
                bookData: null,
                listData: null,
                renderReady: !1
              }),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(l.Component),
        we = !0,
        ke = {
          data: {
            title: 'book1',
            isbn: '111-111-111',
            authors: ['Adam Bob', 'Calvin Dan'],
            rating: 2.5,
            description: 'nothing, you are on debug mode',
            pictureurl:
              'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
          }
        },
        je = {
          data: [
            {
              lid: 1,
              name: 'Eric Fin',
              rating: 4.9,
              condition: 'brand new',
              price: 24.99
            },
            {
              lid: 2,
              name: 'George Harry',
              rating: 4.2,
              condition: 'brand new',
              price: 24.99
            },
            {
              lid: 3,
              name: 'Ivan John',
              rating: 4.2,
              condition: 'used',
              price: 34.5
            }
          ]
        },
        Ce = [
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
                    we
                      ? a.setState({
                          bookData: ke.data,
                          listData: je.data,
                          renderReady: !0
                        })
                      : q.b
                          .getBookInfo(a.props.math.params.bid)
                          .then(function(e) {
                            return q.b
                              .getListInfo(a.props.match.params.bid)
                              .then(function(t) {
                                return a.setState({
                                  bookData: e,
                                  listData: t,
                                  renderReady: !0
                                });
                              });
                          });
                  }),
                  (a.bodyContent = function() {
                    return a.state.renderReady
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          a.bookInfo(),
                          a.listingListInfo()
                        )
                      : i.a.createElement(i.a.Fragment, null, 'Loading Page');
                  }),
                  (a.bookInfo = function() {
                    return i.a.createElement(
                      'div',
                      { className: 'row mt-3' },
                      i.a.createElement(
                        'div',
                        { className: 'col-3' },
                        i.a.createElement('img', {
                          className: 'img-fluid',
                          src: a.state.bookData.pictureurl,
                          alt: 'cover'
                        })
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col mt-3' },
                        i.a.createElement('h1', null, a.state.bookData.title),
                        i.a.createElement(
                          'h5',
                          null,
                          'author(s):',
                          ' ',
                          a.state.bookData.authors.map(function(e, t) {
                            return i.a.createElement(
                              'span',
                              { key: t },
                              (0 === t ? ' ' : ', ') + e
                            );
                          })
                        ),
                        i.a.createElement(
                          'span',
                          null,
                          'isbn: ',
                          a.state.bookData.isbn
                        ),
                        i.a.createElement('br', null),
                        i.a.createElement(
                          'div',
                          { className: 'row' },
                          i.a.createElement(
                            'div',
                            { className: 'col-1' },
                            'rating:'
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col-1' },
                            i.a.createElement(I.a.Body.RatingStar, {
                              rating: a.state.bookData.rating,
                              dimension: 12
                            })
                          )
                        ),
                        i.a.createElement('br', null),
                        i.a.createElement('br', null),
                        i.a.createElement(
                          'h6',
                          null,
                          a.state.bookData.description
                        )
                      )
                    );
                  }),
                  (a.listingListInfo = function() {
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        'div',
                        {
                          className: 'row justify-content-md-center text-white'
                        },
                        i.a.createElement(
                          'div',
                          {
                            className: 'col col-3 border',
                            style: {
                              backgroundColor: '#9370DB',
                              borderTopLeftRadius: '0.5em'
                            },
                            onClick: a.onColumnClick,
                            name: 'name'
                          },
                          i.a.createElement(
                            'p',
                            {
                              className: 'text-white text-center mt-2',
                              name: 'name',
                              style: {
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none'
                              }
                            },
                            'Name ',
                            a.columnCaret('name')
                          )
                        ),
                        i.a.createElement(
                          'div',
                          {
                            className: 'col col-3 border',
                            style: { backgroundColor: '#9370DB' },
                            onClick: a.onColumnClick,
                            name: 'rating'
                          },
                          i.a.createElement(
                            'p',
                            {
                              className: 'text-white text-center mt-2',
                              name: 'rating',
                              style: {
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none'
                              }
                            },
                            'Rating ',
                            a.columnCaret('rating')
                          )
                        ),
                        i.a.createElement(
                          'div',
                          {
                            className: 'col col-3 border',
                            style: { backgroundColor: '#9370DB' },
                            onClick: a.onColumnClick,
                            name: 'condition'
                          },
                          i.a.createElement(
                            'p',
                            {
                              className: 'text-white text-center mt-2',
                              name: 'condition',
                              style: {
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none'
                              }
                            },
                            'Condition ',
                            a.columnCaret('condition')
                          )
                        ),
                        i.a.createElement(
                          'div',
                          {
                            className: 'col col-2 border',
                            style: {
                              backgroundColor: '#9370DB',
                              borderTopRightRadius: '0.5em'
                            },
                            onClick: a.onColumnClick,
                            name: 'price'
                          },
                          i.a.createElement(
                            'p',
                            {
                              className: 'text-white text-center mt-2',
                              name: 'price',
                              style: {
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none'
                              }
                            },
                            'Price ',
                            a.columnCaret('price')
                          )
                        )
                      ),
                      a.state.listData.map(function(e, t) {
                        return i.a.createElement(
                          'div',
                          {
                            className: 'row justify-content-md-center',
                            key: t,
                            onClick: function(t) {
                              return (window.location = './list/'.concat(
                                e.lid
                              ));
                            }
                          },
                          i.a.createElement(
                            'div',
                            { className: 'col col-3 border' },
                            e.name
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col col-3 border' },
                            i.a.createElement(
                              'div',
                              { className: 'row' },
                              i.a.createElement(
                                'div',
                                {
                                  className: 'col col-8',
                                  style: { margin: '0 auto' }
                                },
                                i.a.createElement(I.a.Body.RatingStar, {
                                  rating: e.rating
                                })
                              )
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col col-3 border' },
                            e.condition
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col col-2 border' },
                            e.price
                          )
                        );
                      }),
                      i.a.createElement('div', { className: 'mb-4' })
                    );
                  }),
                  (a.columnCaret = function(e) {
                    return e === a.state.listSortBy
                      ? 'asc' === a.state.listDirection
                        ? i.a.createElement('i', {
                            className: 'fa fa-caret-up',
                            'aria-hidden': 'true',
                            name: e
                          })
                        : i.a.createElement('i', {
                            className: 'fa fa-caret-down',
                            'aria-hidden': 'true',
                            name: e
                          })
                      : i.a.createElement(i.a.Fragment, null);
                  }),
                  (a.onColumnClick = function(e) {
                    var t = e.target.getAttribute('name');
                    t === a.state.listSortBy
                      ? 'asc' === a.state.listDirection
                        ? a.setState({
                            listDirection: 'dsc',
                            listData: a.state.listData.sort(function(e, a) {
                              return e[t] < a[t];
                            })
                          })
                        : a.setState({
                            listDirection: 'asc',
                            listData: a.state.listData.sort(function(e, a) {
                              return e[t] > a[t];
                            })
                          })
                      : a.setState({
                          listSortBy: t,
                          listDirection: 'asc',
                          listData: a.state.listData.sort(function(e, a) {
                            return e[t] > a[t];
                          })
                        });
                  }),
                  (a.render = function() {
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(I.a.NavBar, null),
                      i.a.createElement(I.a.Header, null),
                      i.a.createElement(I.a.Body, { content: a.bodyContent() }),
                      i.a.createElement(I.a.Footer, null)
                    );
                  }),
                  (a.state = {
                    bid: e.match.params.bid,
                    bookData: null,
                    listData: null,
                    listSortBy: 'rating',
                    listDirection: 'asc',
                    renderReady: !1
                  }),
                  (a.bodyContent = a.bodyContent.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.bookInfo = a.bookInfo.bind(Object(v.a)(Object(v.a)(a)))),
                  (a.listingListInfo = a.listingListInfo.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.columnCaret = a.columnCaret.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  (a.onColumnClick = a.onColumnClick.bind(
                    Object(v.a)(Object(v.a)(a))
                  )),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(l.Component)
          },
          { path: '/book/:bid/list/:lid', exact: !0, component: Ne }
        ],
        Oe = a(19),
        Se = !0,
        De = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(b.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).submit = function(e) {
                a.props.stripe.createToken({ name: 'Name' }).then(function(e) {
                  var t = e.token;
                  Se
                    ? a.setState({ complete: !0 })
                    : q.d
                        .postTransactionInfo({ tid: a.state.tid, data: t })
                        .then(function(e) {
                          e.ok
                            ? a.setState({ complete: !0 })
                            : console.log(
                                e.text().then(function(e) {
                                  return JSON.parse(e).error;
                                })
                              );
                        });
                });
              }),
              (a.render = function() {
                return a.state.complete
                  ? i.a.createElement('h1', null, 'Purchase Complete')
                  : i.a.createElement(
                      'div',
                      { className: 'checkout' },
                      i.a.createElement(
                        'p',
                        null,
                        'Would you like to complete the purchase?'
                      ),
                      i.a.createElement(Oe.CardElement, null),
                      i.a.createElement(
                        'button',
                        {
                          className: 'btn btn-success mt-4',
                          onClick: a.submit
                        },
                        'Purchase'
                      )
                    );
              }),
              (a.state = { tid: e.tid, complete: !1 }),
              (a.submit = a.submit.bind(Object(v.a)(Object(v.a)(a)))),
              a
            );
          }
          return Object(f.a)(t, e), t;
        })(l.Component),
        xe = Object(Oe.injectStripe)(De),
        Be = !0,
        Le = {
          data: {
            error: null,
            bookData: {
              title: 'book1',
              isbn: '111-111-111',
              authors: ['Adam Bob', 'Calvin Dan'],
              rating: 2.5,
              pictureurl:
                'https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png'
            },
            listData: {
              seller: 'badS3ll3r',
              rating: 4.3,
              condition: 'new',
              price: 10.23
            }
          }
        },
        Ie = [
          {
            path: '/transaction/:tid',
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
                    Be
                      ? a.setState({
                          transactionData: Le.data,
                          renderReady: !0
                        })
                      : q.d.getTransactionInfo(a.state.tid).then(function(e) {
                          return a.setState({
                            transactionData: e,
                            renderReady: !0
                          });
                        });
                  }),
                  (a.bodyContent = function() {
                    return a.state.renderReady
                      ? a.state.transactionData.error
                        ? i.a.createElement(
                            'h1',
                            null,
                            a.state.transactionData.error
                          )
                        : i.a.createElement(
                            i.a.Fragment,
                            null,
                            a.transactionDetail(),
                            a.checkoutRow()
                          )
                      : i.a.createElement(I.a.Body.Loading, null);
                  }),
                  (a.transactionDetail = function() {
                    return i.a.createElement(
                      'div',
                      { className: 'row my-4' },
                      i.a.createElement('div', { className: 'col-1' }),
                      i.a.createElement(
                        'div',
                        { className: 'col-2' },
                        i.a.createElement('img', {
                          className: 'img-fluid',
                          src: a.state.transactionData.bookData.pictureurl,
                          alt: 'cover'
                        })
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col-4' },
                        i.a.createElement(
                          'h1',
                          null,
                          a.state.transactionData.bookData.title
                        ),
                        i.a.createElement(
                          'h5',
                          null,
                          'author(s):',
                          ' ',
                          a.state.transactionData.bookData.authors.map(function(
                            e,
                            t
                          ) {
                            return i.a.createElement(
                              'span',
                              { key: t },
                              (0 === t ? ' ' : ', ') + e
                            );
                          })
                        ),
                        i.a.createElement(
                          'span',
                          null,
                          'isbn: ',
                          a.state.transactionData.bookData.isbn
                        ),
                        i.a.createElement('br', null),
                        i.a.createElement(
                          'div',
                          { className: 'row' },
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            'rating:'
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            i.a.createElement(I.a.Body.RatingStar, {
                              rating: a.state.transactionData.bookData.rating,
                              dimension: 12
                            })
                          )
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col-4' },
                        i.a.createElement(
                          'h5',
                          null,
                          'Seller: ',
                          a.state.transactionData.listData.seller
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'row' },
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            'rating:'
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col-2' },
                            i.a.createElement(I.a.Body.RatingStar, {
                              rating: a.state.transactionData.listData.rating,
                              dimension: 12
                            })
                          )
                        ),
                        i.a.createElement(
                          'h6',
                          null,
                          'condition: ',
                          a.state.transactionData.listData.condition
                        ),
                        i.a.createElement(
                          'h6',
                          null,
                          'price: ',
                          a.state.transactionData.listData.price
                        )
                      ),
                      i.a.createElement('div', { className: 'col-1' })
                    );
                  }),
                  (a.checkoutRow = function() {
                    return i.a.createElement(
                      'div',
                      { className: 'row my-4' },
                      i.a.createElement('div', { className: 'col-2' }),
                      i.a.createElement(
                        'div',
                        { className: 'col' },
                        i.a.createElement(
                          Oe.StripeProvider,
                          { apiKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx' },
                          i.a.createElement(
                            'div',
                            { className: 'example' },
                            i.a.createElement(
                              Oe.Elements,
                              null,
                              i.a.createElement(xe, { tid: a.state.tid })
                            )
                          )
                        )
                      ),
                      i.a.createElement('div', { className: 'col-6' })
                    );
                  }),
                  (a.render = function() {
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(I.a.NavBar, null),
                      i.a.createElement(I.a.Header, null),
                      i.a.createElement(I.a.Body, { content: a.bodyContent() }),
                      i.a.createElement(I.a.Footer, null)
                    );
                  }),
                  (a.state = {
                    tid: e.match.params.tid,
                    transactionData: null,
                    renderReady: !1
                  }),
                  a
                );
              }
              return Object(f.a)(t, e), t;
            })(l.Component)
          }
        ],
        Re = [].concat(
          Object(d.a)(W),
          Object(d.a)(J.default),
          Object(d.a)(G),
          Object(d.a)(_),
          Object(d.a)(Y),
          Object(d.a)(ae),
          Object(d.a)(fe),
          Object(d.a)(Ce),
          Object(d.a)(le),
          Object(d.a)(Ie),
          Object(d.a)(E)
        );
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(138);
      null !== r.a &&
        null !== o.a &&
        (s.a.render(
          i.a.createElement(
            m.a,
            null,
            i.a.createElement('div', null, Object(u.a)(Re))
          ),
          document.getElementById('root')
        ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          }));
    }
  ],
  [[81, 1, 2]]
]);
//# sourceMappingURL=main.720a12c9.chunk.js.map
