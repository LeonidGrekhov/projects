(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a(3),
        o = a(6),
        l = a(4),
        i = a(5),
        s = a(2),
        c = a(0),
        m = a.n(c),
        u = a(8),
        d = a(47),
        p = a.n(d),
        g = (a(123), a(75)),
        h = a.n(g),
        f = !1,
        b = (function(e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
              ((a = Object(o.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).componentDidMount = function() {
                f
                  ? a.setState({ user: { firstname: 'Rob' } })
                  : u.b.getLogin().then(function(e) {
                      e.ok &&
                        e.text().then(function(e) {
                          (e = JSON.parse(e)).firstname &&
                            a.setState({ user: { firstname: e.firstname } });
                        });
                    });
              }),
              (a.onChange = function(e) {
                a.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (a.onLogin = function(e) {
                e.preventDefault(),
                  u.b
                    .postLogin(a.state.email, a.state.password)
                    .then(function(e) {
                      console.log(e),
                        e.firstname
                          ? a.setState({ user: e })
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
              (a.onSignOut = function(e) {
                e.preventDefault(),
                  u.b.postLogout().then(function(e) {
                    e.ok && a.setState({ user: null });
                  });
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
                    src: h.a,
                    className: 'mr-2',
                    height: '30',
                    width: '30',
                    alt: 'banner',
                    onClick: function(e) {
                      return (window.location = 'user/1/cart');
                    }
                  }),
                  l = m.a.createElement(
                    'button',
                    {
                      variant: 'primary',
                      id: 'cartDiv',
                      className: 'btn btn-primary my-2 mr-2 my-sm-0',
                      onClick: function(e) {
                        return (window.location = 'user/1/cart');
                      }
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
                            { className: 'dropdown show' },
                            m.a.createElement(
                              'a',
                              {
                                className:
                                  'btn btn-secondary dropdown-toggle text-light',
                                href: '/',
                                role: 'button',
                                id: 'dropdownMenuLink',
                                'data-toggle': 'dropdown',
                                'aria-haspopup': 'true',
                                'aria-expanded': 'false'
                              },
                              'Hi, ',
                              a.state.user.firstname
                            ),
                            m.a.createElement(
                              'div',
                              {
                                className: 'dropdown-menu',
                                'aria-labelledby': 'dropdownMenuLink'
                              },
                              m.a.createElement(
                                'a',
                                { className: 'dropdown-item', href: '/user/1' },
                                'User Profile'
                              ),
                              m.a.createElement(
                                'a',
                                {
                                  className: 'dropdown-item',
                                  href: '/user/1/listing/1'
                                },
                                'Create a listing'
                              ),
                              m.a.createElement(
                                'a',
                                {
                                  className: 'dropdown-item',
                                  href: '/transaction'
                                },
                                'Transaction history'
                              ),
                              m.a.createElement(
                                'a',
                                {
                                  className: 'dropdown-item',
                                  href: '/user/1/report'
                                },
                                'User Report'
                              )
                            )
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
                          m.a.createElement('div', null, ' \xa0'),
                          t,
                          r,
                          m.a.createElement(
                            'div',
                            null,
                            ' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0'
                          ),
                          m.a.createElement(
                            'div',
                            null,
                            ' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0'
                          )
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
              (a.onChange = a.onChange.bind(Object(s.a)(Object(s.a)(a)))),
              (a.onLogin = a.onLogin.bind(Object(s.a)(Object(s.a)(a)))),
              (a.onRegister = a.onRegister.bind(Object(s.a)(Object(s.a)(a)))),
              (a.onSearch = a.onSearch.bind(Object(s.a)(Object(s.a)(a)))),
              a
            );
          }
          return Object(i.a)(t, e), t;
        })(c.Component),
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
        })(c.Component),
        y = (a(124),
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
        w = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
              i[s] = arguments[s];
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
        })(c.Component),
        N = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
              i[s] = arguments[s];
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
        })(c.Component),
        k = a(48),
        j = a.n(k),
        C = a(49),
        S = a.n(C),
        O = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
              i[s] = arguments[s];
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
                            src: S.a,
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
                              src: S.a,
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
        })(c.Component),
        x = (function(e) {
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
                          m.a.createElement(w, null)
                        ),
                      m.a.createElement(
                        'div',
                        { className: 'col px-0' },
                        this.props.content
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component);
      (x.Loading = N), (x.RatingStar = O);
      var D = x,
        B = (a(125), a(160)),
        I = (function(e) {
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
                    'Terms Of Service'
                  ].map(function(e, t) {
                    return m.a.createElement(
                      'div',
                      { className: 'd-inline  m-2', key: t },
                      m.a.createElement(
                        B.a,
                        { to: '/'.concat(e) },
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
        })(c.Component);
      t.a = { NavBar: b, Header: v, Body: D, Footer: I };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      'use strict';
      var n = a(74),
        r = a.n(n),
        o = a(35),
        l = a.n(o),
        i = r.a.connect(l.a),
        s = function(e) {
          return e.json();
        },
        c = function(e, t) {
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
            return c('/login', {}, 'get');
          },
          getRegister: function() {
            return c('/register', {}, 'get');
          },
          postLogin: function(e, t) {
            return c('/login', { email: e, password: t }).then(s);
          },
          postLogout: function() {
            return c('/logout', {});
          },
          postRegister: function(e, t, a, n) {
            return c('/register', {
              firstname: e,
              lastname: t,
              email: a,
              password: n
            });
          }
        },
        u = {
          getAdmin: function(e) {
            return c('/admin/'.concat(e), {}, 'get').then(s);
          },
          getListingData: function(e) {
            var t = e.aid,
              a = e.lid;
            return c(
              '/admin/'.concat(t, '/listingdata'),
              { lid: a },
              'get'
            ).then(s);
          },
          getUserAccountData: function(e) {
            var t = e.aid,
              a = e.uid;
            return c(
              '/admin/'.concat(t, '/useraccountdata'),
              { uid: a },
              'get'
            ).then(s);
          },
          postCloseListing: function(e) {
            var t = e.aid,
              a = e.lid;
            return c('/admin/'.concat(t, '/closelisting'), { lid: a });
          },
          postCloseUserAccount: function(e) {
            var t = e.aid,
              a = e.uid;
            return c('/admin/'.concat(t, '/closeuseraccount'), { uid: a });
          },
          postRefundTransaction: function(e) {
            var t = e.aid,
              a = e.tid;
            return c('/admin/'.concat(t, '/refund'), { tid: a });
          },
          postUpdateListingProfile: function(e) {
            var t = e.aid,
              a = e.lid,
              n = e.profile;
            return c('/admin/'.concat(t, '/updatelisting'), {
              lid: a,
              profile: n
            });
          },
          postUpdateUserAccountProfile: function(e) {
            var t = e.aid,
              a = e.uid,
              n = e.profile;
            return c('/admin/'.concat(t, '/updateuseraccount'), {
              uid: a,
              profile: n
            });
          }
        },
        d = {
          getBookInfo: function(e) {
            return c('book/'.concat(e), {}, 'get').then(s);
          },
          getListInfo: function(e) {
            return c('/book/'.concat(e, '/list'), {}, 'get').then(s);
          },
          getListingInfo: function(e, t) {
            return c('/book/'.concat(e, '/list/').concat(t)).then(s);
          }
        },
        p = {
          getSearchByAuthor: function(e, t) {
            return c(
              '/search/author/'.concat(e, '/page/').concat(t),
              {},
              'get'
            );
          },
          getSearchByIsbn: function(e, t) {
            return c('/search/isbn/'.concat(e, '/page/').concat(t), {}, 'get');
          },
          getSearchByTitle: function(e, t) {
            return c('/search/title/'.concat(e, '/page/').concat(t), {}, 'get');
          }
        },
        g = {
          getUserChatList: function(e) {
            return c('/user/'.concat(e, '/chat'), {}, 'get').then(s);
          },
          getUserChatLog: function(e) {
            var t = e.uid,
              a = e.cid;
            return c('/user/'.concat(t, '/chat/').concat(a), {}, 'get').then(s);
          },
          getUserConfiguration: function(e) {
            return c('/user/'.concat(e, '/configuration'), {}, 'get').then(s);
          },
          getUserProfile: function(e) {
            return c('/user/'.concat(e), {}, 'get').then(s);
          },
          postUserChatLog: function(e) {
            var t = e.uid,
              a = e.cid,
              n = e.message;
            return c('/user/'.concat(t, '/chat.').concat(a), { message: n });
          },
          postUserConfiguration: function(e) {
            var t = e.uid,
              a = e.configuration;
            return c('/user/'.concat(t, '/configuration'), {
              configuration: a
            });
          }
        },
        h = {
          getTransactionInfo: function(e) {
            return c('/transaction/'.concat(e), {}, 'get').then(s);
          },
          postTransactionInfo: function(e) {
            var t = e.tid,
              a = e.data;
            return c('/transaction/'.concat(t), { data: a });
          }
        };
      a.d(t, 'g', function() {
        return i;
      }),
        a.d(t, 'a', function() {
          return u;
        }),
        a.d(t, 'b', function() {
          return m;
        }),
        a.d(t, 'c', function() {
          return d;
        }),
        a.d(t, 'd', function() {
          return p;
        }),
        a.d(t, 'f', function() {
          return g;
        }),
        a.d(t, 'e', function() {
          return h;
        });
    },
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
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      var n = {
        './About': 31,
        './About.css': 65,
        './About.js': 31,
        './AboutPerson': 32,
        './AboutPerson.js': 32,
        './Edwin Menjivar': 66,
        './Edwin Menjivar.jpg': 131,
        './Edwin Menjivar.json': 66,
        './Icons/gear_white.svg': 36,
        './Jesus Garnica': 67,
        './Jesus Garnica.json': 67,
        './John Mendoza': 68,
        './John Mendoza.json': 68,
        './Leonid Grekhov': 69,
        './Leonid Grekhov.jpg': 132,
        './Leonid Grekhov.json': 69,
        './Michael Winata': 70,
        './Michael Winata.json': 70,
        './Vismay Patel': 71,
        './Vismay Patel.json': 71,
        './VismayPatel.jpg': 133,
        './alpha.png': 134,
        './jesusGarnica.jpg': 135,
        './john.jpg': 136,
        './members': 15,
        './members.js': 15,
        './michael winata.jpg': 137,
        './route': 30,
        './route.js': 30
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
        (r.id = 21);
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
    ,
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(31),
        r = a(32);
      t.default = [
        { path: '/about', exact: !0, component: n.default },
        { path: '/about/:person', exact: !0, component: r.default }
      ];
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(9),
        o = a(6),
        l = a(4),
        i = a(5),
        s = a(2),
        c = a(0),
        m = a.n(c),
        u = (a(65), a(36)),
        d = a.n(u),
        p = a(1),
        g = a(15),
        h = (function(e) {
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
                          src: a(21)('./'.concat(n.picture)),
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
                  return a(21)('./' + e);
                })
              }),
              (r.teamCards = r.teamCards.bind(Object(s.a)(Object(s.a)(r)))),
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
                                  'M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;\r M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;\r M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;\r M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;'
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
        })(c.Component);
      t.default = h;
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(9),
        o = a(6),
        l = a(4),
        i = a(5),
        s = a(0),
        c = a.n(s),
        m = a(161),
        u = a(160),
        d = (function(e) {
          function t(e) {
            var r;
            Object(n.a)(this, t),
              (r = Object(o.a)(this, Object(l.a)(t).call(this, e)));
            var i = e.match.params.person;
            try {
              r.state = { profile: a(21)('./' + i) };
            } catch (s) {
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
                    ? c.a.createElement(m.a, {
                        to: ''.concat(window.location.pathname, '/404')
                      })
                    : c.a.createElement(
                        'div',
                        null,
                        c.a.createElement(
                          'div',
                          { className: 'container' },
                          c.a.createElement(
                            u.a,
                            { to: '/' },
                            c.a.createElement(
                              'button',
                              { type: 'button', className: 'btn btn-info' },
                              'Home Page'
                            )
                          )
                        ),
                        c.a.createElement(
                          'div',
                          { className: 'container' },
                          c.a.createElement(
                            'div',
                            { className: 'row mt-3' },
                            c.a.createElement(
                              'div',
                              { className: 'col-3 text-center' },
                              c.a.createElement('img', {
                                src: a(21)(
                                  './'.concat(this.state.profile.picture)
                                ),
                                className: 'img-fluid',
                                alt: 'fluid'
                              }),
                              c.a.createElement('br', null),
                              c.a.createElement(
                                'h3',
                                null,
                                this.state.profile.name
                              ),
                              c.a.createElement(
                                'h4',
                                null,
                                this.state.profile.role
                              ),
                              c.a.createElement('br', null),
                              c.a.createElement(
                                'h6',
                                null,
                                c.a.createElement(
                                  'span',
                                  { role: 'img', 'aria-label': 'emoji' },
                                  '\ud83d\udce7'
                                ),
                                ' ',
                                this.state.profile.email
                              ),
                              c.a.createElement(
                                'h6',
                                null,
                                c.a.createElement(
                                  'span',
                                  { role: 'img', 'aria-label': 'emoji' },
                                  '\ud83c\udf10'
                                ),
                                ' ',
                                c.a.createElement(
                                  'a',
                                  { href: this.state.profile.website },
                                  this.state.profile.website
                                )
                              )
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'col' },
                              c.a.createElement(
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
        })(s.Component);
      t.default = d;
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(34);
      t.default = [{ path: '/Team', exact: !0, component: n.default }];
    },
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(9),
        o = a(6),
        l = a(4),
        i = a(5),
        s = a(2),
        c = a(0),
        m = a.n(c),
        u = a(1),
        d = (a(72), a(15)),
        p = (function(e) {
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
                  d.default.map(function(e, t) {
                    var n = r.state.profiles[t];
                    return m.a.createElement(
                      'div',
                      { className: 'col-xl-3 col-md-6 mb-4', key: t },
                      m.a.createElement(
                        'div',
                        { className: 'border-0 team-card text-center ' },
                        m.a.createElement('img', {
                          src: a(145)('./'.concat(n.picture)),
                          className: 'img-fluid pb-2',
                          alt: '...'
                        }),
                        m.a.createElement(
                          'div',
                          { className: 'p-3' },
                          m.a.createElement(
                            'h5',
                            { className: 'card-title mb-0' },
                            n.name
                          ),
                          m.a.createElement(
                            'div',
                            { className: 'card-text role-text' },
                            n.role
                          ),
                          m.a.createElement(
                            'div',
                            { className: 'cart-text text-black-50' },
                            n.description
                          )
                        )
                      )
                    );
                  })
                );
              }),
              (r.state = {
                showSideBar: !1,
                profiles: d.default.map(function(e) {
                  return a(21)('./' + e);
                })
              }),
              (r.teamCards = r.teamCards.bind(Object(s.a)(Object(s.a)(r)))),
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
                    m.a.createElement(u.a.NavBar, null),
                    m.a.createElement(u.a.Header, null),
                    m.a.createElement(u.a.Body, {
                      noSideBar: !this.state.showSideBar,
                      content: m.a.createElement(
                        'div',
                        {
                          className:
                            'container-fluid h-100 main-body justify-content-center'
                        },
                        m.a.createElement(
                          'div',
                          { className: 'row justify-content-center p-4' },
                          m.a.createElement(
                            'div',
                            { className: 'big-text' },
                            'Who is the team?'
                          )
                        ),
                        m.a.createElement(
                          'div',
                          { className: 'row justify-content-center p-4' },
                          this.teamCards()
                        )
                      )
                    }),
                    m.a.createElement(u.a.Footer, null)
                  );
                }
              }
            ]),
            t
          );
        })(c.Component);
      t.default = p;
    },
    function(e, t) {
      var a = '';
      Object({ NODE_ENV: 'production', PUBLIC_URL: '' })
        .REACT_APP_LOCAL_SERVER && (a = 'http://localhost:3000'),
        (e.exports = a);
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/gear_white.cd117e8d.svg';
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
    ,
    ,
    function(e, t, a) {},
    function(e) {
      e.exports = {
        name: 'Edwin Menjivar',
        role: 'Git Master',
        picture: 'Edwin Menjivar.jpg',
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
        picture: 'jesusGarnica.jpg',
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
        picture: 'john.jpg',
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
        picture: 'Leonid Grekhov.jpg',
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
    function(e, t, a) {},
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/shoppingCart.b6859808.svg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/question_mark.54cff9d2.svg';
    },
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
    ,
    ,
    function(e, t, a) {
      e.exports = a(159);
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
    function(e, t, a) {},
    function(e, t, a) {},
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/Edwin Menjivar.9a7e20e8.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/Leonid Grekhov.e4e95f72.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/VismayPatel.e62e7190.jpg';
    },
    function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAKCAYAAAD2Fg1xAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIZACEgvCS90gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAJElEQVQ4y2P8//8/w3AATAzDBIx6ZNQjox4Z9cioR0Y9QgkAAMgvAxGVrXxcAAAAAElFTkSuQmCC';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/jesusGarnica.60afb3b2.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/john.ccf309ba.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/michael winata.3ef0fe7e.jpg';
    },
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    ,
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {
      var n = {
        './Edwin Menjivar.jpg': 146,
        './Leonid Grekhov.jpg': 147,
        './Team': 34,
        './Team.css': 72,
        './Team.js': 34,
        './VismayPatel.jpg': 148,
        './jesusGarnica.jpg': 149,
        './john.jpg': 150,
        './michael winata.jpg': 151,
        './route': 33,
        './route.js': 33
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
        (r.id = 145);
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/Edwin Menjivar.9a7e20e8.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/Leonid Grekhov.e4e95f72.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/VismayPatel.e62e7190.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/jesusGarnica.60afb3b2.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/john.ccf309ba.jpg';
    },
    function(e, t, a) {
      e.exports = a.p + 'static/media/michael winata.3ef0fe7e.jpg';
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {
      'use strict';
      a.r(t);
      a(87);
      var n = a(46),
        r = a.n(n),
        o = a(73),
        l = (a(88), a(89), a(0)),
        i = a.n(l),
        s = a(14),
        c = a.n(s),
        m = a(164),
        u = a(85),
        d = a(10),
        p = a(3),
        g = a(9),
        h = a(6),
        f = a(4),
        b = a(5),
        E = a(1),
        v = (a(128), a(76)),
        y = a.n(v),
        w = [
          {
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).state = { showSideBar: !1 }),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: i.a.createElement(
                            'div',
                            {
                              className:
                                'container-fluid h-100  main-body align-items-center d-flex justify-content-center'
                            },
                            i.a.createElement(
                              'div',
                              { className: 'row  justify-content-center ' },
                              i.a.createElement(
                                'div',
                                { id: 'big-text' },
                                'Whoops. Sorry but we could not find what you are looking for.'
                              ),
                              i.a.createElement('img', {
                                className: 'img-fluid  w-100',
                                src: y.a
                              })
                            )
                          )
                        }),
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        N = a(2),
        k = (a(129), a(77)),
        j = a.n(k),
        C = a(78),
        S = a.n(C),
        O = a(79),
        x = a.n(O),
        D = a(80),
        B = a.n(D),
        I = a(81),
        L = a.n(I),
        R = a(82),
        A = a.n(R),
        U = a(22),
        T = a.n(U),
        M = a(23),
        W = a.n(M),
        F = a(38),
        P = a.n(F),
        H = a(24),
        z = a.n(H),
        q = [
          {
            path: '/',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).onShowOrHide = function(e) {
                    return a.setState({ showSideBar: !a.state.showSideBar });
                  }),
                  (a.state = { showSideBar: !1 }),
                  (a.onShowOrHide = a.onShowOrHide.bind(
                    Object(N.a)(Object(N.a)(a))
                  )),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      var e = [T.a, W.a, P.a, z.a],
                        t = [W.a, P.a, z.a, T.a],
                        a = [P.a, z.a, T.a, W.a],
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
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
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
                                          src: z.a,
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
                                          src: T.a,
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
                                          src: W.a,
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
                                    src: j.a,
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
                                    src: S.a,
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
                                    src: x.a,
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
                                    src: B.a,
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
                                    src: L.a,
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
                                    src: A.a,
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
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        G = a(30),
        _ = a(12),
        J = a(8),
        V = [
          {
            path: '/register',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    J.b.getRegister().then(function(e) {
                      e.ok || (window.location = '/');
                    });
                  }),
                  (a.onChange = function(e) {
                    a.setState(Object(_.a)({}, e.target.name, e.target.value));
                  }),
                  (a.onSubmit = function(e) {
                    e.preventDefault(),
                      J.b
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
                  (a.onTos = function(e) {
                    a.setState({ tosCheckbox: !a.state.tosCheckbox });
                  }),
                  (a.render = function() {
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(E.a.NavBar, null),
                      i.a.createElement(E.a.Body, {
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
                              'div',
                              { className: 'form-check' },
                              i.a.createElement('input', {
                                type: 'checkbox',
                                className: 'form-check-input',
                                id: 'exampleCheck1',
                                name: 'tosCheckbox',
                                'data-toggle': 'modal',
                                'data-target': '#exampleModalLong',
                                checked: a.state.tosCheckbox,
                                onChange: a.onTos
                              }),
                              i.a.createElement(
                                'label',
                                {
                                  className: 'form-check-label',
                                  for: 'exampleCheck1'
                                },
                                'Read Terms of Service'
                              )
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
                          ),
                          i.a.createElement(
                            'div',
                            {
                              className: 'modal fade',
                              id: 'exampleModalLong',
                              tabindex: '-1',
                              role: 'dialog',
                              'aria-labelledby': 'exampleModalLongTitle',
                              'aria-hidden': 'true'
                            },
                            i.a.createElement(
                              'div',
                              { className: 'modal-dialog', role: 'document' },
                              i.a.createElement(
                                'div',
                                { className: 'modal-content' },
                                i.a.createElement(
                                  'div',
                                  { className: 'modal-header' },
                                  i.a.createElement(
                                    'h5',
                                    {
                                      className: 'modal-title',
                                      id: 'exampleModalLongTitle'
                                    },
                                    'Terms of Services'
                                  ),
                                  i.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      className: 'close',
                                      'data-dismiss': 'modal',
                                      'aria-label': 'Close'
                                    },
                                    i.a.createElement(
                                      'span',
                                      { 'aria-hidden': 'true' },
                                      '\xd7'
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'modal-body' },
                                  i.a.createElement(
                                    'h2',
                                    null,
                                    'Welcome to Litlister.com'
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    "These terms and conditions outline the rules and regulations for the use of Litlister.com's Website."
                                  ),
                                  ' ',
                                  i.a.createElement('br', null),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    "By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Litlister.com's website if you do not accept all of the terms and conditions stated on this page."
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company\'s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client\'s needs in respect of provision of the Company\'s stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.'
                                  ),
                                  i.a.createElement('h2', null, 'Cookies'),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    "We employ the use of cookies. By using Litlister.com's website you consent to the use of cookies in accordance with Litlister.com's privacy policy."
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.'
                                  ),
                                  i.a.createElement('h2', null, 'License'),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    "Unless otherwise stated, Litlister.com and/or it's licensors own the intellectual property rights for all material on Litlister.com. All intellectual property rights are reserved. You may view and/or print pages from http://litlister.com for your own personal use subject to restrictions set in these terms and conditions."
                                  ),
                                  i.a.createElement('p', null, 'You must not:'),
                                  i.a.createElement(
                                    'ol',
                                    null,
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'Republish material from http://litlister.com'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'Sell, rent or sub-license material from http://litlister.com'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'Reproduce, duplicate or copy material from http://litlister.com'
                                    )
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'Redistribute content from Litlister.com (unless content is specifically made for redistribution).'
                                  ),
                                  i.a.createElement(
                                    'h2',
                                    null,
                                    'Hyperlinking to our Content'
                                  ),
                                  i.a.createElement(
                                    'ol',
                                    null,
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'The following organizations may link to our Web site without prior written approval:',
                                      i.a.createElement(
                                        'ol',
                                        null,
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'Government agencies;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'Search engines;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'News organizations;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.'
                                        )
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    'ol',
                                    { start: '2' },
                                    i.a.createElement(
                                      'li',
                                      null,
                                      "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'We may consider and approve in our sole discretion other link requests from the following types of organizations:',
                                      i.a.createElement(
                                        'ol',
                                        null,
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'dot.com community sites;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'associations or other groups representing charities, including charity giving sites,'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'online directory distributors;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'internet portals;'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'accounting, law and consulting firms whose primary clients are businesses; and'
                                        ),
                                        i.a.createElement(
                                          'li',
                                          null,
                                          'educational institutions and trade associations.'
                                        )
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of Litlister and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.'
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site."
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to contact@litlister.com. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.'
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'Approved organizations may hyperlink to our Web site as follows:'
                                  ),
                                  i.a.createElement(
                                    'ol',
                                    null,
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'By use of our corporate name; or'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'By use of the uniform resource locator (Web address) being linked to; or'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      "By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site."
                                    )
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    "No use of Litlister.com's logo or other artwork will be allowed for linking absent a trademark license agreement."
                                  ),
                                  i.a.createElement('h2', null, 'Iframes'),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.'
                                  ),
                                  i.a.createElement(
                                    'h2',
                                    null,
                                    'Reservation of Rights'
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.'
                                  ),
                                  i.a.createElement(
                                    'h2',
                                    null,
                                    'Content Liability'
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.'
                                  ),
                                  i.a.createElement('h2', null, 'Disclaimer'),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:'
                                  ),
                                  i.a.createElement(
                                    'ol',
                                    null,
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'limit or exclude our or your liability for death or personal injury resulting from negligence;'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'limit or exclude our or your liability for fraud or fraudulent misrepresentation;'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'limit any of our or your liabilities in any way that is not permitted under applicable law; or'
                                    ),
                                    i.a.createElement(
                                      'li',
                                      null,
                                      'exclude any of our or your liabilities that may not be excluded under applicable law.'
                                    )
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.'
                                  ),
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.'
                                  ),
                                  i.a.createElement('p', null),
                                  i.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      className: 'btn btn-secondary',
                                      'data-dismiss': 'modal'
                                    },
                                    'Close'
                                  ),
                                  i.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      className: 'btn btn-primary',
                                      'data-dismiss': 'modal'
                                    },
                                    'Read Terms of Services'
                                  )
                                )
                              )
                            )
                          )
                        )
                      }),
                      i.a.createElement(E.a.Footer, null)
                    );
                  }),
                  (a.state = {
                    showSideBar: !1,
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    tosCheckbox: !1
                  }),
                  (a.onChange = a.onChange.bind(Object(N.a)(Object(N.a)(a)))),
                  (a.onSubmit = a.onSubmit.bind(Object(N.a)(Object(N.a)(a)))),
                  a
                );
              }
              return Object(b.a)(t, e), t;
            })(l.Component)
          }
        ],
        Y = (a(138),
        [
          {
            path: '/Contact',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).state = { showSideBar: !1 }),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
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
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ]),
        Q = (a(139),
        [
          {
            path: '/terms of service',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).state = { showSideBar: !1 }),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
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
                                'Terms Of Service'
                              ),
                              i.a.createElement(
                                'p',
                                { className: 'm-4' },
                                i.a.createElement(
                                  'h2',
                                  null,
                                  'Welcome to Litlister.com'
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  "These terms and conditions outline the rules and regulations for the use of Litlister.com's Website."
                                ),
                                ' ',
                                i.a.createElement('br', null),
                                i.a.createElement(
                                  'p',
                                  null,
                                  "By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Litlister.com's website if you do not accept all of the terms and conditions stated on this page."
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company\'s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client\'s needs in respect of provision of the Company\'s stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.'
                                ),
                                i.a.createElement('h2', null, 'Cookies'),
                                i.a.createElement(
                                  'p',
                                  null,
                                  "We employ the use of cookies. By using Litlister.com's website you consent to the use of cookies in accordance with Litlister.com's privacy policy."
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.'
                                ),
                                i.a.createElement('h2', null, 'License'),
                                i.a.createElement(
                                  'p',
                                  null,
                                  "Unless otherwise stated, Litlister.com and/or it's licensors own the intellectual property rights for all material on Litlister.com. All intellectual property rights are reserved. You may view and/or print pages from http://litlister.com for your own personal use subject to restrictions set in these terms and conditions."
                                ),
                                i.a.createElement('p', null, 'You must not:'),
                                i.a.createElement(
                                  'ol',
                                  null,
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'Republish material from http://litlister.com'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'Sell, rent or sub-license material from http://litlister.com'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'Reproduce, duplicate or copy material from http://litlister.com'
                                  )
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'Redistribute content from Litlister.com (unless content is specifically made for redistribution).'
                                ),
                                i.a.createElement(
                                  'h2',
                                  null,
                                  'Hyperlinking to our Content'
                                ),
                                i.a.createElement(
                                  'ol',
                                  null,
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'The following organizations may link to our Web site without prior written approval:',
                                    i.a.createElement(
                                      'ol',
                                      null,
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'Government agencies;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'Search engines;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'News organizations;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.'
                                      )
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'ol',
                                  { start: '2' },
                                  i.a.createElement(
                                    'li',
                                    null,
                                    "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'We may consider and approve in our sole discretion other link requests from the following types of organizations:',
                                    i.a.createElement(
                                      'ol',
                                      null,
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'dot.com community sites;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'associations or other groups representing charities, including charity giving sites,'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'online directory distributors;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'internet portals;'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'accounting, law and consulting firms whose primary clients are businesses; and'
                                      ),
                                      i.a.createElement(
                                        'li',
                                        null,
                                        'educational institutions and trade associations.'
                                      )
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of Litlister and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.'
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site."
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to contact@litlister.com. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.'
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'Approved organizations may hyperlink to our Web site as follows:'
                                ),
                                i.a.createElement(
                                  'ol',
                                  null,
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'By use of our corporate name; or'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'By use of the uniform resource locator (Web address) being linked to; or'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    "By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site."
                                  )
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  "No use of Litlister.com's logo or other artwork will be allowed for linking absent a trademark license agreement."
                                ),
                                i.a.createElement('h2', null, 'Iframes'),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.'
                                ),
                                i.a.createElement(
                                  'h2',
                                  null,
                                  'Reservation of Rights'
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.'
                                ),
                                i.a.createElement(
                                  'h2',
                                  null,
                                  'Content Liability'
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.'
                                ),
                                i.a.createElement('h2', null, 'Disclaimer'),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:'
                                ),
                                i.a.createElement(
                                  'ol',
                                  null,
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'limit or exclude our or your liability for death or personal injury resulting from negligence;'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'limit or exclude our or your liability for fraud or fraudulent misrepresentation;'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'limit any of our or your liabilities in any way that is not permitted under applicable law; or'
                                  ),
                                  i.a.createElement(
                                    'li',
                                    null,
                                    'exclude any of our or your liabilities that may not be excluded under applicable law.'
                                  )
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.'
                                ),
                                i.a.createElement(
                                  'p',
                                  null,
                                  'To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.'
                                ),
                                i.a.createElement('p', null)
                              )
                            )
                          )
                        }),
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ]),
        X = (a(140), !1),
        Z = {
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
        K = {
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
        $ = (function(e) {
          function t(e) {
            var a;
            Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                a.state.search(a.state.query, a.state.page).then(function(e) {
                  return e.text().then(function(e) {
                    (e = JSON.parse(e)),
                      a.setState({ data: e.data, pageCount: e.pageCount });
                  });
                });
              }),
              (a.bodyContent = function() {
                return X
                  ? i.a.createElement(
                      'div',
                      { className: 'container mt-4' },
                      a.pagination(a.state.page, 9),
                      a.result(Z.data),
                      a.pagination(a.state.page, 9)
                    )
                  : null === a.state.pageCount
                  ? i.a.createElement(E.a.Body.Loading, null)
                  : i.a.createElement(
                      'div',
                      { className: 'container mt-4' },
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
                    s = t - e,
                    c = [],
                    m = [],
                    u = -3;
                  u < 0;
                  u++
                )
                  l + u < 0 ||
                    c.push(
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
                  s - d < 0 ||
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
                    c,
                    n,
                    m,
                    o
                  )
                );
              }),
              (a.onPageChange = function(e) {
                if ((e.preventDefault(), X))
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
                            { className: 'col-md-4' },
                            i.a.createElement('h3', null, e.title),
                            i.a.createElement(
                              'span',
                              null,
                              'author(s): ',
                              e.author
                            ),
                            i.a.createElement('br', null),
                            i.a.createElement('span', null, 'isbn: ', e.isbn),
                            i.a.createElement(
                              'div',
                              { id: 'summary' },
                              i.a.createElement(
                                'p',
                                {
                                  className: 'collapse',
                                  id: 'collapseSummary'
                                },
                                e.description
                              ),
                              i.a.createElement('a', {
                                className: 'collapsed',
                                'data-toggle': 'collapse',
                                href: '#collapseSummary',
                                'aria-expanded': 'false',
                                'aria-controls': 'collapseSummary'
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'col-md-5' },
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'row justify-content-md-center text-white'
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
                                  'Name'
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
                                  'Rating'
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
                                  'Condition'
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
                                  'Price'
                                )
                              )
                            ),
                            K.data.map(function(e, t) {
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
                                      i.a.createElement(E.a.Body.RatingStar, {
                                        rating: e.rating,
                                        dimension: 8
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
                            i.a.createElement(
                              'div',
                              { className: 'row' },
                              i.a.createElement(
                                'button',
                                {
                                  type: 'submit',
                                  className: 'btn btn-primary ml-3 mt-2',
                                  onClick: function(e) {
                                    return (window.location = '/book/'.concat(
                                      e.target.value,
                                      '/list'
                                    ));
                                  },
                                  value: e.bid
                                },
                                'See More Listings'
                              )
                            )
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
                  i.a.createElement(E.a.NavBar, {
                    category: a.state.category,
                    query: a.state.query
                  }),
                  i.a.createElement(E.a.Header, null),
                  i.a.createElement(E.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(E.a.Footer, null)
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
                  (a.state.search = J.d.getSearchByAuthor),
                  (a.state.query = r))
                : o
                ? ((a.state.category = 'isbn'),
                  (a.state.search = J.d.getSearchByIsbn),
                  (a.state.query = o))
                : l &&
                  ((a.state.category = 'title'),
                  (a.state.search = J.d.getSearchByTitle),
                  (a.state.query = l)),
              (a.bodyContent = a.bodyContent.bind(Object(N.a)(Object(N.a)(a)))),
              (a.pagination = a.pagination.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onPageChange = a.onPageChange.bind(
                Object(N.a)(Object(N.a)(a))
              )),
              (a.result = a.result.bind(Object(N.a)(Object(N.a)(a)))),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        ee = [
          {
            path: '/search/author/:author/page/:page',
            exact: !0,
            component: $
          },
          { path: '/search/isbn/:isbn/page/:page', exact: !0, component: $ },
          { path: '/search/title/:title/page/:page', exact: !0, component: $ }
        ],
        te = 'Once upon',
        ae =
          'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven\u2019t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle\u2014average\u2014is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation\u2019s economic future, it will be impossible to ignore.\u201d',
        ne = 'Seller@mail.sfsu.edu',
        re = 'used',
        oe = '$8.99',
        le = [
          {
            path: '/book/:bid',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).onShowOrHide = function(e) {
                    return a.setState({ showSideBar: !a.state.showSideBar });
                  }),
                  (a.state = { showSideBar: !0 }),
                  (a.onShowOrHide = a.onShowOrHide.bind(
                    Object(N.a)(Object(N.a)(a))
                  )),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      var e = i.a.createElement(
                        'div',
                        null,
                        i.a.createElement('br', null),
                        i.a.createElement(
                          'div',
                          { className: 'container' },
                          i.a.createElement(
                            'div',
                            { className: 'row' },
                            i.a.createElement(
                              'div',
                              { className: 'col-6' },
                              i.a.createElement('img', {
                                className: 'd-block w-100',
                                src:
                                  'https://rheasupdo.files.wordpress.com/2015/08/img_5998.jpg',
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
                                te
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Description: ',
                                ae
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'SellerInfo: ',
                                ne
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Book State: ',
                                re
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'div',
                                { className: 'text-default' },
                                'Price: ',
                                oe
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'button',
                                {
                                  type: 'submit',
                                  className: 'btn btn-primary',
                                  onClick: this.onSubmit
                                },
                                'Buy'
                              )
                            )
                          )
                        )
                      );
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: e
                        }),
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        ie = (a(141), !0),
        se = ['Once upon'],
        ce = {
          BookTitle: 'Once upon',
          Description:
            'In this eye-opening book, renowned economist and bestselling author Tyler Cowen explains that phenomenon: High earners are taking ever more advantage of machine intelligence in data analysis and achieving ever-better results. Meanwhile, low earners who haven\u2019t committed to learning, to making the most of new technologies, have poor prospects. Nearly every business sector relies less and less on manual labor, and this fact is forever changing the world of work and wages. A steady, secure life somewhere in the middle\u2014average\u2014is over. With The Great Stagnation, Cowen explained why median wages stagnated over the last four decades; in Average Is Over he reveals the essential nature of the new economy, identifies the best path forward for workers and entrepreneurs, and provides readers with actionable advice to make the most of the new economic landscape. It is a challenging and sober must-read but ultimately exciting, good news. In debates about our nation\u2019s economic future, it will be impossible to ignore.\u201d',
          pictureurl:
            'https://rheasupdo.files.wordpress.com/2015/08/img_5998.jpg'
        },
        me = [
          {
            path: '/user/:uid/listing/:lid',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    ie && a.setState({ renderReady: !0 });
                  }),
                  (a.autoCompleteSearch = function(e) {
                    console.log(e);
                  }),
                  (a.onChange = function(e) {
                    return a.setState(
                      Object(_.a)({}, e.target.name, e.target.value)
                    );
                  }),
                  (a.onChangeSearch = function(e) {
                    ie &&
                      a.setState({
                        search: e.target.value,
                        searchSuggestion: i.a.createElement(
                          'ul',
                          null,
                          se.map(function(t, n) {
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
                  (a.onImageRemove = function(e) {
                    var t = a.state,
                      n = t.listerImages,
                      r = t.listerImageDisplayIndex,
                      o = n;
                    0 < o.length &&
                      (o.pop(),
                      0 === o.length
                        ? a.setState({
                            listerImages: o,
                            listerImageDisplayIndex: null
                          })
                        : r === o.length
                        ? a.setState({
                            listerImages: o,
                            listerImageDisplayIndex: r - 1
                          })
                        : a.setState({ listerImages: o }));
                  }),
                  (a.onSubmit = function(e) {
                    e.preventDefault();
                  }),
                  (a.onShowOrHide = function(e) {
                    return a.setState({ showSideBar: !a.state.showSideBar });
                  }),
                  (a.onSuggestion = function(e) {
                    e.target.getAttribute('value'),
                      ie && a.setState({ bookData: ce });
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
                      i.a.createElement('br', null),
                      i.a.createElement(
                        'div',
                        { className: 'row' },
                        i.a.createElement(
                          'div',
                          { className: 'col-6' },
                          i.a.createElement('img', {
                            className: 'd-block w-100',
                            src: a.state.bookData.pictureurl,
                            alt: 'placeholder'
                          }),
                          i.a.createElement('br', null),
                          i.a.createElement(
                            'div',
                            { className: 'row' },
                            i.a.createElement(
                              'div',
                              { className: 'form-group' },
                              i.a.createElement(
                                'div',
                                { className: 'row' },
                                i.a.createElement(
                                  'div',
                                  { className: 'col-6' },
                                  i.a.createElement(
                                    'p',
                                    null,
                                    'Upload up to 5 images of the book you wish to sell.'
                                  ),
                                  i.a.createElement(
                                    'label',
                                    {
                                      for: 'file-upload',
                                      class: 'img-btn-plus',
                                      style: { display: 'inline-block' }
                                    },
                                    '+'
                                  ),
                                  i.a.createElement('input', {
                                    id: 'file-upload',
                                    type: 'file',
                                    onChange: a.onImageUpload,
                                    style: { display: 'none' }
                                  }),
                                  i.a.createElement(
                                    'button',
                                    {
                                      class: 'img-btn-minus',
                                      onClick: a.onImageRemove,
                                      style: {
                                        marginRight: '15px',
                                        display: 'inline-block'
                                      }
                                    },
                                    '-'
                                  ),
                                  'current image:',
                                  i.a.createElement('img', {
                                    className: 'img-fluid',
                                    src:
                                      a.state.listerImages[
                                        a.state.listerImageDisplayIndex
                                      ]
                                  })
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'col-6' },
                                  i.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    a.state.listerImages.map(function(e, t) {
                                      return i.a.createElement(
                                        'div',
                                        { className: 'UploadedImage', key: t },
                                        i.a.createElement('img', {
                                          className: 'img-fluid',
                                          src: e
                                        })
                                      );
                                    })
                                  )
                                )
                              )
                            )
                          )
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
                                { className: 'col' },
                                i.a.createElement(
                                  'div',
                                  { className: 'text-default' },
                                  'Title: ',
                                  ce.BookTitle
                                ),
                                i.a.createElement('br', null),
                                i.a.createElement(
                                  'div',
                                  { className: 'text-default' },
                                  'Description: ',
                                  ce.Description
                                ),
                                i.a.createElement('br', null),
                                i.a.createElement(
                                  'div',
                                  { className: 'form-group' },
                                  i.a.createElement(
                                    'label',
                                    { htmlFor: 'form' },
                                    'User description:'
                                  ),
                                  i.a.createElement('textarea', {
                                    rows: '4',
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
                                  'select',
                                  {
                                    className: 'custom-select',
                                    value: a.state.bookCondition,
                                    onChange: a.onChange
                                  },
                                  i.a.createElement(
                                    'option',
                                    { selected: !0 },
                                    'Book Condition'
                                  ),
                                  i.a.createElement(
                                    'option',
                                    { value: '1' },
                                    'New'
                                  ),
                                  i.a.createElement(
                                    'option',
                                    { value: '2' },
                                    'Fair'
                                  ),
                                  i.a.createElement(
                                    'option',
                                    { value: '3' },
                                    'Used(no missing pages)'
                                  ),
                                  i.a.createElement(
                                    'option',
                                    { value: '2' },
                                    'Missing pages'
                                  ),
                                  i.a.createElement(
                                    'option',
                                    { value: '3' },
                                    'Bad'
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'form-group' },
                                  i.a.createElement('textarea', {
                                    rows: '1',
                                    type: 'userPrice',
                                    className: 'form-control',
                                    id: 'form-userPrice',
                                    placeholder: 'Enter price',
                                    name: 'userPrice',
                                    value: a.state.userPrice,
                                    onChange: a.onChange
                                  })
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
                              'Sell'
                            ),
                            i.a.createElement(
                              'h1',
                              null,
                              'User id: ',
                              a.state.uid,
                              ' Transaction id:',
                              a.state.lid
                            )
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
                    userPrice: null,
                    listData: null,
                    bookCondition: null,
                    listerImages: [],
                    listerImageDisplayIndex: null,
                    listerImageCapacity: 5,
                    renderReady: !1
                  }),
                  (a.onShowOrHide = a.onShowOrHide.bind(
                    Object(N.a)(Object(N.a)(a))
                  )),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
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
                          : i.a.createElement(E.a.Body.Loading, null)
                      );
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: e
                        }),
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ],
        ue = a(83),
        de = (a(142),
        (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentWillReceiveProps = function(e) {
                a.setState({ logData: e.logData });
              }),
              (a.componentDidMount = function() {
                a.ps = new ue.a(c.a.findDOMNode(Object(N.a)(Object(N.a)(a))));
                var e = c.a.findDOMNode(Object(N.a)(Object(N.a)(a)))
                  .clientHeight;
                (c.a.findDOMNode(Object(N.a)(Object(N.a)(a))).scrollTop = e),
                  a.ps.update(),
                  c.a.findDOMNode(Object(N.a)(Object(N.a)(a))).scrollTo(0, e);
              }),
              (a.componentDidUpdate = function(e) {
                (c.a.findDOMNode(
                  Object(N.a)(Object(N.a)(a))
                ).scrollTop = c.a.findDOMNode(
                  Object(N.a)(Object(N.a)(a))
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
          return Object(b.a)(t, e), t;
        })(l.Component)),
        pe = (a(143), !0),
        ge = {
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
        he = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                if (pe) {
                  var e = ge.bookData,
                    t = ge.listData,
                    n = ge.logData;
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
                  J.f.getUserChatLog({ uid: o, cid: l }).then(function(e) {
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
                a.setState(Object(_.a)({}, e.target.name, e.target.value));
              }),
              (a.onMessageReceived = function(e) {
                var t = a.state.logData;
                t.push(e), a.setState({ logData: t });
              }),
              (a.onSubmit = function(e) {
                if ((e.preventDefault(), pe)) {
                  var t = a.state,
                    n = t.logData,
                    r = t.message;
                  n.push(r), a.setState({ logData: n, message: '' });
                } else {
                  var o = a.state,
                    l = o.uid,
                    i = o.cid,
                    s = o.message;
                  J.f.postUserChatLog({ uid: l, cid: i, message: s }),
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
                    : i.a.createElement(E.a.Body.Loading, null)
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
                            i.a.createElement(E.a.Body.RatingStar, {
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
                            i.a.createElement(E.a.Body.RatingStar, {
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
                      i.a.createElement(de, { logData: a.state.logData })
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
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(E.a.Footer, null)
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
              J.g.on(
                ''.concat(a.state.cid, ':messageReceived'),
                a.onMessageReceived
              ),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        fe = !0,
        be = {
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
        Ee = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                fe
                  ? a.setState({
                      renderReady: !0,
                      firstname: be.data.generalInfo.firstname,
                      lastname: be.data.generalInfo.lastname,
                      email: be.data.generalInfo.email
                    })
                  : J.f
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
                  : i.a.createElement(E.a.Body.Loading, null);
              }),
              (a.onChange = function(e) {
                a.setState(Object(_.a)({}, e.target.name, e.target.value));
              }),
              (a.onSubmit = function(e) {
                e.preventDefault(),
                  J.f
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
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(E.a.Footer, null)
                );
              }),
              (a.state = {
                showSideBar: !1,
                firstname: '',
                lastname: '',
                email: '',
                renderReady: !1
              }),
              (a.bodyContent = a.bodyContent.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onChange = a.onChange.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onSubmit = a.onSubmit.bind(Object(N.a)(Object(N.a)(a)))),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        ve = !0,
        ye = {
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
          ],
          reportListData: [
            { rid: 1, title: 'adasd', time: '14:22 24-03-2019' },
            { rid: 3, title: 'eitnieuyn69384', time: '18:22 21-03-2019' }
          ]
        },
        we = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                if (ve)
                  a.setState({
                    chatListData: ye.chatListData,
                    profileData: ye.profileData,
                    reportListData: ye.reportListData,
                    display: 'Profile'
                  });
                else {
                  var e = a.state.uid;
                  J.f.getUserProfile(e).then(function(t) {
                    t.error
                      ? (window.location = '/404')
                      : J.f.getUserChatList(e).then(function(e) {
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
                    : i.a.createElement(E.a.Body.Loading, null)
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
                      i.a.createElement('i', { className: 'fa fa-envelope' }),
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
                            className: 'list-group-item list-group-item-action',
                            onClick: a.onReport
                          },
                          i.a.createElement('i', { className: 'fa fa-flag' }),
                          ' Report'
                        )
                      : i.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'list-group-item list-group-item-action',
                            onClick: a.onConfigure
                          },
                          i.a.createElement('i', { className: 'fa fa-cogs' }),
                          ' Configure'
                        )
                  )
                );
              }),
              (a.userNavigation = function() {
                return i.a.createElement(
                  'ul',
                  { className: 'nav justify-content-center nav-tabs' },
                  ['Profile', 'Message', 'Review', 'Listing', 'Report'].map(
                    function(e, t) {
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
                    }
                  )
                );
              }),
              (a.userContent = function(e) {
                e.guest;
                var t = a.state,
                  n = t.display,
                  r = t.profileData,
                  o = t.chatListData,
                  l = t.reportListData,
                  s = t.uid;
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
                                    .concat(s, '/chat/')
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
                  : 'Report' === n
                  ? i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('br', null),
                      l.map(function(e, t) {
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
                                    .concat(s, '/report/')
                                    .concat(e.rid));
                                }
                              },
                              i.a.createElement(
                                'div',
                                { className: 'card-body' },
                                i.a.createElement(
                                  'h5',
                                  { className: 'card-title' },
                                  e.title
                                ),
                                i.a.createElement(
                                  'p',
                                  { className: 'card-text text-dark' },
                                  e.time
                                )
                              )
                            )
                          )
                        );
                      })
                    )
                  : void 0;
              }),
              (a.displayRating = function(e) {
                return i.a.createElement(
                  'span',
                  null,
                  i.a.createElement('br', null),
                  i.a.createElement(E.a.Body.RatingStar, { rating: e })
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
                e.preventDefault(),
                  (window.location = './'.concat(a.state.uid, '/report'));
              }),
              (a.onConfigure = function(e) {
                e.preventDefault();
              }),
              (a.render = function() {
                return i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(E.a.Footer, null)
                );
              }),
              (a.state = {
                guest: !0,
                uid: e.match.params.uid,
                chatListData: [],
                reportListData: [],
                profileData: null,
                display: null,
                onUserNavigation: {
                  Profile: a.onProfile,
                  Message: a.onMessage,
                  Review: a.onReview,
                  Listing: a.onListing,
                  Report: function(e) {
                    return a.setState({ display: 'Report' });
                  }
                },
                renderReady: !1
              }),
              (a.bodyContent = a.bodyContent.bind(Object(N.a)(Object(N.a)(a)))),
              (a.profileSideBar = a.profileSideBar.bind(
                Object(N.a)(Object(N.a)(a))
              )),
              (a.userNavigation = a.userNavigation.bind(
                Object(N.a)(Object(N.a)(a))
              )),
              (a.userContent = a.userContent.bind(Object(N.a)(Object(N.a)(a)))),
              (a.displayRating = a.displayRating.bind(
                Object(N.a)(Object(N.a)(a))
              )),
              (a.onUserNavigation = a.onUserNavigation.bind(
                Object(N.a)(Object(N.a)(a))
              )),
              (a.onProfile = a.onProfile.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onMessage = a.onMessage.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onReview = a.onReview.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onListing = a.onListing.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onReport = a.onReport.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onConfigure = a.onConfigure.bind(Object(N.a)(Object(N.a)(a)))),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        Ne = !0,
        ke = {
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
        je = {
          title: 'this guy is a scammer',
          description: 'Hey, this guy scammed me on a different website.'
        },
        Ce = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                Ne
                  ? a.setState({
                      renderReady: !0,
                      userInfo: ke.data.generalInfo,
                      reportTitle: je.title,
                      reportDescription: je.description
                    })
                  : J.f
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
                      { className: 'row', style: { marginRight: '0' } },
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
                            i.a.createElement('h2', null, 'User Report')
                          ),
                          i.a.createElement('br', null),
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
                                'Target User'
                              ),
                              i.a.createElement(
                                'label',
                                {
                                  className: 'col-sm-6',
                                  htmlFor: 'form-last-name'
                                },
                                'Target Listing'
                              )
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-group row' },
                              i.a.createElement(
                                'label',
                                { className: 'col-sm-6' },
                                'Anon123'
                              ),
                              i.a.createElement(
                                'label',
                                { className: 'col-sm-6' },
                                '-'
                              )
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('label', null, 'Title'),
                            i.a.createElement('br', null),
                            i.a.createElement(
                              'label',
                              null,
                              a.state.reportTitle
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('label', null, 'Description'),
                            i.a.createElement('br', null),
                            i.a.createElement(
                              'label',
                              null,
                              a.state.reportDescription
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('label', null, 'Report Status'),
                            i.a.createElement('br', null),
                            i.a.createElement(
                              'button',
                              { className: 'btn btn-danger' },
                              'Closed'
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement(
                              'label',
                              null,
                              'Report Resolution'
                            ),
                            i.a.createElement('br', null),
                            i.a.createElement(
                              'label',
                              null,
                              a.state.reportResolution
                            )
                          )
                        )
                      ),
                      i.a.createElement('div', { className: 'col-2' })
                    )
                  : i.a.createElement(E.a.Body.Loading, null);
              }),
              (a.onChange = function(e) {
                a.setState(Object(_.a)({}, e.target.name, e.target.value));
              }),
              (a.onSubmit = function(e) {
                e.preventDefault(),
                  J.f
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
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(E.a.Footer, null)
                );
              }),
              (a.state = {
                showSideBar: !1,
                userInfo: null,
                targetInfo: null,
                reportTitle: null,
                reportDescription: null,
                reportStatusOpen: !1,
                reportResolution:
                  'user Anon123 is now banned, thank you for your report',
                renderReady: !1
              }),
              (a.bodyContent = a.bodyContent.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onSubmit = a.onSubmit.bind(Object(N.a)(Object(N.a)(a)))),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        Se = !0,
        Oe = {
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
        xe = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                Se
                  ? a.setState({
                      renderReady: !0,
                      userInfo: Oe.data.generalInfo
                    })
                  : J.f
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
                      { className: 'row', style: { marginRight: '0' } },
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
                            i.a.createElement('h2', null, 'User Report')
                          ),
                          i.a.createElement('br', null),
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
                                'Target User'
                              ),
                              i.a.createElement(
                                'label',
                                {
                                  className: 'col-sm-6',
                                  htmlFor: 'form-last-name'
                                },
                                'Target Listing'
                              )
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-group row' },
                              i.a.createElement('input', {
                                type: 'text',
                                className: 'form-control col',
                                id: 'form-first-name',
                                placeholder: 'Enter target user id',
                                name: 'firstname',
                                value: a.state.firstname,
                                onChange: a.onChange,
                                style: { marginLeft: '1em', marginRight: '1em' }
                              }),
                              i.a.createElement('input', {
                                type: 'text',
                                className: 'form-control col',
                                id: 'form-last-name',
                                placeholder: 'Enter target listing id',
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
                            i.a.createElement('label', null, 'Title'),
                            i.a.createElement('input', {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'Enter report title',
                              name: 'reportTitle',
                              value: a.state.reportTitle,
                              onChange: a.onChange
                            })
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'form-group' },
                            i.a.createElement('label', null, 'Description'),
                            i.a.createElement('textarea', {
                              row: '3',
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'Enter report description',
                              name: 'reportDescription',
                              value: a.state.reportDescription,
                              onChange: a.onChange
                            })
                          ),
                          i.a.createElement(
                            'button',
                            {
                              type: 'submit',
                              className: 'btn btn-success',
                              onClick: a.onSubmit
                            },
                            'Submit User Report'
                          )
                        )
                      ),
                      i.a.createElement('div', { className: 'col-2' })
                    )
                  : i.a.createElement(E.a.Body.Loading, null);
              }),
              (a.onChange = function(e) {
                a.setState(Object(_.a)({}, e.target.name, e.target.value));
              }),
              (a.onSubmit = function(e) {
                e.preventDefault(),
                  J.f
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
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Body, {
                    noSideBar: !a.state.showSideBar,
                    content: a.bodyContent()
                  }),
                  i.a.createElement(E.a.Footer, null)
                );
              }),
              (a.state = {
                showSideBar: !1,
                userInfo: null,
                targetInfo: null,
                reportTitle: null,
                reportDescription: null,
                renderReady: !1
              }),
              (a.bodyContent = a.bodyContent.bind(Object(N.a)(Object(N.a)(a)))),
              (a.onSubmit = a.onSubmit.bind(Object(N.a)(Object(N.a)(a)))),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        De = (a(144),
        [
          { path: '/user/:uid', exact: !0, component: we },
          { path: '/user/:uid/chat/:cid', exact: !0, component: he },
          { path: '/user/:uid/configuration', exact: !0, component: Ee },
          { path: '/user/:uid/report', exact: !0, component: xe },
          { path: '/user/:uid/report/:rid', exact: !0, component: Ce },
          {
            path: '/user/:uid/cart',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).state = { showSideBar: !1 }),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: i.a.createElement(
                            'div',
                            { className: 'row p-4 h-100 ' },
                            i.a.createElement(
                              'div',
                              { className: 'col' },
                              i.a.createElement(
                                'h1',
                                null,
                                'Your Shopping Cart'
                              ),
                              i.a.createElement(
                                'h3',
                                { className: 'm-4' },
                                'Nothing so far!'
                              )
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'col-4 justify-content-center' },
                              i.a.createElement(
                                'div',
                                { className: 'cartTotalBox p-3' },
                                i.a.createElement(
                                  'h3',
                                  null,
                                  'Your Cart Total:'
                                ),
                                i.a.createElement(
                                  'h4',
                                  { className: 'mb-4' },
                                  '$0.00'
                                ),
                                i.a.createElement(
                                  'button',
                                  { className: 'btn btn-primary' },
                                  'Proceed To Checkout'
                                )
                              )
                            )
                          )
                        }),
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ]),
        Be = a(33),
        Ie = !0,
        Le = {
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
        Re = {
          data: {
            seller: 'dummy seller name',
            rating: 0.4,
            condition: 'new',
            price: 11.09,
            description:
              'I bought the wrong book, and I missed the return deadline.'
          }
        },
        Ae = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                Ie
                  ? a.setState({
                      bookData: Le.data,
                      listData: Re.data,
                      renderReady: !0
                    })
                  : J.c.getBookInfo(a.state.bid).then(function(e) {
                      return J.c.getListingInfo(a.state.lid).then(function(t) {
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
                    : i.a.createElement(E.a.Body.Loading, null)
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
                          i.a.createElement(E.a.Body.RatingStar, {
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
                          i.a.createElement(E.a.Body.RatingStar, {
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
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Header, null),
                  i.a.createElement(E.a.Body, { content: a.bodyContent() }),
                  i.a.createElement(E.a.Footer, null)
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
          return Object(b.a)(t, e), t;
        })(l.Component),
        Ue = !0,
        Te = {
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
        Me = {
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
        We = [
          {
            path: '/book/:bid/list',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    Ue
                      ? a.setState({
                          bookData: Te.data,
                          listData: Me.data,
                          renderReady: !0
                        })
                      : J.c
                          .getBookInfo(a.props.math.params.bid)
                          .then(function(e) {
                            return J.c
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
                        i.a.createElement(
                          'h1',
                          { className: 'text-dark' },
                          a.state.bookData.title
                        ),
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
                            i.a.createElement(E.a.Body.RatingStar, {
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
                                i.a.createElement(E.a.Body.RatingStar, {
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
                      i.a.createElement(E.a.NavBar, null),
                      i.a.createElement(E.a.Header, null),
                      i.a.createElement(E.a.Body, { content: a.bodyContent() }),
                      i.a.createElement(E.a.Footer, null)
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
                    Object(N.a)(Object(N.a)(a))
                  )),
                  (a.bookInfo = a.bookInfo.bind(Object(N.a)(Object(N.a)(a)))),
                  (a.listingListInfo = a.listingListInfo.bind(
                    Object(N.a)(Object(N.a)(a))
                  )),
                  (a.columnCaret = a.columnCaret.bind(
                    Object(N.a)(Object(N.a)(a))
                  )),
                  (a.onColumnClick = a.onColumnClick.bind(
                    Object(N.a)(Object(N.a)(a))
                  )),
                  a
                );
              }
              return Object(b.a)(t, e), t;
            })(l.Component)
          },
          { path: '/book/:bid/list/:lid', exact: !0, component: Ae }
        ],
        Fe = !0,
        Pe = {
          adminData: {
            issues: [
              {
                iid: 1,
                sourceUser: 13,
                targetUser: 11,
                targetListing: 1,
                title: 'scammer',
                description: 'dis guy scams',
                time: '12:22 17-04-2019'
              },
              {
                iid: 2,
                sourceUser: 8,
                targetUser: 11,
                targetListing: 1,
                title: 'ban this guy',
                description: 'he scams people',
                time: '12:36 17-04-2019'
              },
              {
                iid: 3,
                sourceUser: 11,
                title: 'help',
                description:
                  'hi, ive been targetted by online mafias because I didnt want to give them any discount',
                time: '15:15 17-04-2019'
              },
              {
                iid: 4,
                sourceUser: 9,
                targetUser: 11,
                targetListing: 1,
                transaction: 1,
                title: 'scam',
                description:
                  'I bought a book from this guy. He posted the condition good as new, but its actually missing some pages',
                time: '18:16 17-04-2019'
              }
            ]
          },
          userInfo: {
            8: {
              profile: {
                firstname: 'Anon2',
                lastname: '',
                email: 'anon2@non.domain',
                rating: 4.3,
                pictureurl:
                  'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                description:
                  'this is a placeholder account. Turn off debug to switch to an actual profile.'
              },
              chatLog: []
            },
            9: {
              profile: {
                firstname: 'Anon3',
                lastname: '',
                email: 'anon3@non.domain',
                rating: 4.3,
                pictureurl:
                  'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                description:
                  'this is a placeholder account. Turn off debug to switch to an actual profile.'
              },
              chatLog: []
            },
            11: {
              profile: {
                firstname: 'Bob',
                lastname: 'Ross',
                email: 'fake@email.domain',
                rating: 4.3,
                pictureurl:
                  'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                description:
                  'this is a placeholder account. Turn off debug to switch to an actual profile.'
              },
              chatLog: []
            },
            13: {
              profile: {
                firstname: 'Anon4',
                lastname: '',
                email: 'anon4@non.domain',
                rating: 4.3,
                pictureurl:
                  'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                description:
                  'this is a placeholder account. Turn off debug to switch to an actual profile.'
              },
              chatLog: []
            }
          }
        },
        He = [
          {
            path: '/admin/:aid',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    Fe
                      ? a.setState({ adminData: Pe.adminData, renderReady: !0 })
                      : J.a.getAdmin(a.state.aid).then(function(e) {
                          return a.setState({ adminData: e, renderReady: !0 });
                        });
                  }),
                  (a.detailColumn = function() {
                    var e = a.state.selectedIssue;
                    return e
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement('h1', null, 'Issue: #', e.iid),
                          i.a.createElement('h4', null, 'Issue Description:'),
                          i.a.createElement('h4', null, e.description),
                          i.a.createElement('h2', null, 'Source:'),
                          i.a.createElement(
                            'h4',
                            null,
                            Pe.userInfo[e.sourceUser].profile.firstname,
                            ' ',
                            Pe.userInfo[e.sourceUser].profile.lastname
                          ),
                          i.a.createElement(
                            'h4',
                            null,
                            Pe.userInfo[e.sourceUser].profile.email
                          ),
                          e.targetUser &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement('h2', null, 'Target:'),
                              i.a.createElement(
                                'h4',
                                null,
                                Pe.userInfo[e.targetUser].profile.firstname,
                                ' ',
                                Pe.userInfo[e.targetUser].profile.lastname
                              ),
                              i.a.createElement(
                                'h4',
                                null,
                                Pe.userInfo[e.targetUser].profile.email
                              )
                            )
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          'Select an issue'
                        );
                  }),
                  (a.issueColumn = function() {
                    return a.state.adminData.issues.map(function(e, t) {
                      return i.a.createElement(
                        'div',
                        {
                          className: 'card',
                          key: t,
                          onClick: function(t) {
                            return a.setState({ selectedIssue: e });
                          }
                        },
                        i.a.createElement(
                          'div',
                          { className: 'card-body' },
                          i.a.createElement(
                            'h5',
                            { className: 'card-title' },
                            'Issue #',
                            e.iid
                          ),
                          i.a.createElement(
                            'p',
                            { className: 'card-text text-dark' },
                            'source id:',
                            e.sourceUser
                          ),
                          i.a.createElement(
                            'h5',
                            { className: 'card-title' },
                            e.title
                          ),
                          i.a.createElement(
                            'h6',
                            { className: 'card-title' },
                            e.time
                          ),
                          i.a.createElement(
                            'h6',
                            { className: 'card-title' },
                            'assignee: Admin123'
                          )
                        )
                      );
                    });
                  }),
                  (a.resolutionColumn = function() {
                    var e = a.state.selectedIssue;
                    return e
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            'h1',
                            null,
                            'Source: ',
                            Pe.userInfo[e.sourceUser].profile.firstname,
                            ' ',
                            Pe.userInfo[e.sourceUser].profile.lastname,
                            ' ',
                            i.a.createElement(
                              'button',
                              {
                                className: 'btn btn-danger',
                                style: { marginLeft: '15px' }
                              },
                              'Ban User'
                            ),
                            ' '
                          ),
                          i.a.createElement(
                            'form',
                            null,
                            i.a.createElement(
                              'div',
                              { className: 'form-group' },
                              i.a.createElement('textarea', {
                                className: 'form-control',
                                rows: '3',
                                placeholder: 'Message to '
                                  .concat(
                                    Pe.userInfo[e.sourceUser].profile.firstname,
                                    ' '
                                  )
                                  .concat(
                                    Pe.userInfo[e.sourceUser].profile.lastname
                                  )
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-group' },
                              i.a.createElement(
                                'button',
                                { className: 'btn btn-primary' },
                                'Send Message'
                              )
                            )
                          ),
                          e.targetUser &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement(
                                'h1',
                                null,
                                'Target: ',
                                Pe.userInfo[e.targetUser].profile.firstname,
                                ' ',
                                Pe.userInfo[e.targetUser].profile.lastname,
                                ' ',
                                i.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-danger',
                                    style: { marginLeft: '15px' }
                                  },
                                  'Ban User'
                                ),
                                ' '
                              ),
                              i.a.createElement(
                                'form',
                                null,
                                i.a.createElement(
                                  'div',
                                  { className: 'form-group' },
                                  i.a.createElement('textarea', {
                                    className: 'form-control',
                                    rows: '3',
                                    placeholder: 'Message to '
                                      .concat(
                                        Pe.userInfo[e.targetUser].profile
                                          .firstname,
                                        ' '
                                      )
                                      .concat(
                                        Pe.userInfo[e.targetUser].profile
                                          .lastname
                                      )
                                  })
                                ),
                                i.a.createElement(
                                  'div',
                                  { className: 'form-group' },
                                  i.a.createElement(
                                    'button',
                                    { className: 'btn btn-primary' },
                                    'Send Message'
                                  )
                                )
                              )
                            )
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          'Select an issue'
                        );
                  }),
                  (a.render = function() {
                    return a.state.renderReady
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(E.a.NavBar, null),
                          i.a.createElement(
                            'div',
                            {
                              className: 'row mt-4',
                              style: { marginRight: '0' }
                            },
                            i.a.createElement('div', { className: 'col-1' }),
                            i.a.createElement(
                              'div',
                              { className: 'col-2' },
                              i.a.createElement('h2', null, 'Issues'),
                              a.issueColumn()
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'col-4' },
                              i.a.createElement('h2', null, 'Details'),
                              a.detailColumn()
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'col-4' },
                              i.a.createElement('h2', null, 'Resolution'),
                              a.resolutionColumn()
                            ),
                            i.a.createElement('div', { className: 'col-1' })
                          )
                        )
                      : i.a.createElement(E.a.Body.Loading, null);
                  }),
                  (a.state = {
                    aid: e.match.params.aid,
                    adminData: null,
                    selectedIssue: null,
                    renderReady: !1
                  }),
                  a
                );
              }
              return Object(b.a)(t, e), t;
            })(l.Component)
          }
        ],
        ze = a(19),
        qe = !0,
        Ge = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).submit = function(e) {
                a.props.stripe.createToken({ name: 'Name' }).then(function(e) {
                  var t = e.token;
                  qe
                    ? a.setState({ complete: !0 })
                    : J.e
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
                      i.a.createElement(ze.CardElement, null),
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
              (a.submit = a.submit.bind(Object(N.a)(Object(N.a)(a)))),
              a
            );
          }
          return Object(b.a)(t, e), t;
        })(l.Component),
        _e = Object(ze.injectStripe)(Ge),
        Je = !0,
        Ve = {
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
        Ye = (function(e) {
          function t(e) {
            var a;
            return (
              Object(p.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).componentDidMount = function() {
                Je
                  ? a.setState({ transactionData: Ve.data, renderReady: !0 })
                  : J.e.getTransactionInfo(a.state.tid).then(function(e) {
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
                  : i.a.createElement(E.a.Body.Loading, null);
              }),
              (a.transactionDetail = function() {
                return i.a.createElement(
                  'div',
                  { className: 'row my-4', style: { marginRight: '0' } },
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
                      { className: 'row', style: { marginRight: '0' } },
                      i.a.createElement(
                        'div',
                        { className: 'col-2' },
                        'rating:'
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col-2' },
                        i.a.createElement(E.a.Body.RatingStar, {
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
                      { className: 'row', style: { marginRight: '0' } },
                      i.a.createElement(
                        'div',
                        { className: 'col-2' },
                        'rating:'
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'col-2' },
                        i.a.createElement(E.a.Body.RatingStar, {
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
                  { className: 'row my-4', style: { marginRight: '0' } },
                  i.a.createElement('div', { className: 'col-2' }),
                  i.a.createElement(
                    'div',
                    { className: 'col' },
                    i.a.createElement(
                      ze.StripeProvider,
                      { apiKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx' },
                      i.a.createElement(
                        'div',
                        { className: 'example' },
                        i.a.createElement(
                          ze.Elements,
                          null,
                          i.a.createElement(_e, { tid: a.state.tid })
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
                  i.a.createElement(E.a.NavBar, null),
                  i.a.createElement(E.a.Header, null),
                  i.a.createElement(E.a.Body, { content: a.bodyContent() }),
                  i.a.createElement(E.a.Footer, null)
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
          return Object(b.a)(t, e), t;
        })(l.Component),
        Qe = !0,
        Xe = {
          data: [
            {
              tid: 1,
              total: '34.50',
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
              },
              time: '17:08 25-04-2019'
            },
            {
              tid: 2,
              total: '34.50',
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
              },
              time: '17:08 25-04-2019'
            }
          ]
        },
        Ze = [
          {
            path: '/transaction/',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).componentDidMount = function() {
                    Qe &&
                      a.setState({
                        transactionHistoryData: Xe.data,
                        renderReady: !0
                      });
                  }),
                  (a.bodyContent = function() {
                    return a.state.renderReady
                      ? a.state.transactionHistoryData.error
                        ? i.a.createElement(
                            'h1',
                            null,
                            a.state.transactionHistoryData.error
                          )
                        : i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                              'h1',
                              { className: 'text-dark pl-2' },
                              'Transaction History'
                            ),
                            a.transactionHistoryDetail()
                          )
                      : i.a.createElement(E.a.Body.Loading, null);
                  }),
                  (a.transactionHistoryDetail = function() {
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      a.state.transactionHistoryData.map(function(e, t) {
                        return i.a.createElement(
                          'div',
                          { className: 'row my-4 mr-0' },
                          i.a.createElement('div', { className: 'col-1' }),
                          i.a.createElement(
                            'div',
                            {
                              className: 'card',
                              onClick: function(t) {
                                return (window.location = '/transaction/'.concat(
                                  e.tid
                                ));
                              }
                            },
                            i.a.createElement(
                              'div',
                              { className: 'card-body' },
                              i.a.createElement(
                                'h5',
                                { className: 'card-title' },
                                'Transaction: ',
                                e.tid,
                                ' (',
                                e.time,
                                ')'
                              ),
                              i.a.createElement(
                                'p',
                                { className: 'card-text text-dark' },
                                i.a.createElement(
                                  'div',
                                  {
                                    className: 'row',
                                    style: { paddingLeft: '-15px' }
                                  },
                                  i.a.createElement(
                                    'div',
                                    { className: 'col-2' },
                                    i.a.createElement('img', {
                                      className: 'img-fluid',
                                      src: e.bookData.pictureurl,
                                      alt: 'cover'
                                    })
                                  ),
                                  i.a.createElement(
                                    'div',
                                    { className: 'col-4' },
                                    i.a.createElement(
                                      'h1',
                                      { className: 'text-dark' },
                                      e.bookData.title
                                    ),
                                    i.a.createElement(
                                      'h5',
                                      null,
                                      'author(s):',
                                      ' ',
                                      e.bookData.authors.map(function(e, t) {
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
                                      e.bookData.isbn
                                    ),
                                    i.a.createElement('br', null),
                                    i.a.createElement(
                                      'div',
                                      { className: 'row  mr-0' },
                                      i.a.createElement(
                                        'div',
                                        { className: 'col-3' },
                                        'rating:'
                                      ),
                                      i.a.createElement(
                                        'div',
                                        { className: 'col-2' },
                                        i.a.createElement(E.a.Body.RatingStar, {
                                          rating: e.bookData.rating,
                                          dimension: 10
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
                                      e.listData.seller
                                    ),
                                    i.a.createElement(
                                      'div',
                                      { className: 'row  mr-0' },
                                      i.a.createElement(
                                        'div',
                                        { className: 'col-3' },
                                        'rating:'
                                      ),
                                      i.a.createElement(
                                        'div',
                                        { className: 'col-2' },
                                        i.a.createElement(E.a.Body.RatingStar, {
                                          rating: e.listData.rating,
                                          dimension: 10
                                        })
                                      )
                                    ),
                                    i.a.createElement(
                                      'h6',
                                      null,
                                      'condition: ',
                                      e.listData.condition
                                    ),
                                    i.a.createElement(
                                      'h6',
                                      null,
                                      'price: ',
                                      e.listData.price
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement('div', { className: 'col-1' })
                        );
                      })
                    );
                  }),
                  (a.render = function() {
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(E.a.NavBar, null),
                      i.a.createElement(E.a.Header, null),
                      i.a.createElement(E.a.Body, { content: a.bodyContent() }),
                      i.a.createElement(E.a.Footer, null)
                    );
                  }),
                  (a.state = {
                    tid: e.match.params.tid,
                    transactionHistoryData: null,
                    renderReady: !1
                  }),
                  a
                );
              }
              return Object(b.a)(t, e), t;
            })(l.Component)
          },
          { path: '/transaction/:tid', exact: !0, component: Ye }
        ],
        Ke = (a(157),
        [
          {
            path: '/Invest',
            exact: !0,
            component: (function(e) {
              function t(e) {
                var a;
                return (
                  Object(p.a)(this, t),
                  ((a = Object(h.a)(
                    this,
                    Object(f.a)(t).call(this, e)
                  )).state = { showSideBar: !1 }),
                  a
                );
              }
              return (
                Object(b.a)(t, e),
                Object(g.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(E.a.NavBar, null),
                        i.a.createElement(E.a.Header, null),
                        i.a.createElement(E.a.Body, {
                          noSideBar: !this.state.showSideBar,
                          content: i.a.createElement(
                            'div',
                            {
                              className:
                                'container-fluid h-100 main-body d-flex align-items-center justify-content-center'
                            },
                            i.a.createElement(
                              'div',
                              { className: 'row justify-content-center p-4' },
                              i.a.createElement(
                                'div',
                                { className: 'big-text' },
                                'Looking To Invest?'
                              ),
                              i.a.createElement(
                                'p',
                                null,
                                'We are currently preparing to work with investors so we can build the future together. Hold on tight while we prepare and set up and we will update this page soon.'
                              )
                            )
                          )
                        }),
                        i.a.createElement(E.a.Footer, null)
                      );
                    }
                  }
                ]),
                t
              );
            })(l.Component)
          }
        ]),
        $e = [].concat(
          Object(d.a)(q),
          Object(d.a)(G.default),
          Object(d.a)(V),
          Object(d.a)(Y),
          Object(d.a)(ee),
          Object(d.a)(le),
          Object(d.a)(De),
          Object(d.a)(We),
          Object(d.a)(He),
          Object(d.a)(me),
          Object(d.a)(Ze),
          Object(d.a)(Be.default),
          Object(d.a)(Q),
          Object(d.a)(Ke),
          Object(d.a)(w)
        );
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(158);
      null !== r.a &&
        null !== o.a &&
        (c.a.render(
          i.a.createElement(
            m.a,
            null,
            i.a.createElement('div', null, Object(u.a)($e))
          ),
          document.getElementById('root')
        ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          }));
    }
  ],
  [[86, 1, 2]]
]);
//# sourceMappingURL=main.5f34b62e.chunk.js.map
