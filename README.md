# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- vite project install -->

PS D:\react\Argon-project> npm create vite@latest

> npx
> create-vite

√ Project name: ... vite-project
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in D:\react\Argon-project\vite-project...

Done. Now run:

cd vite-project
npm install
npm run dev

PS D:\react\Argon-project> cd vite-project
PS D:\react\Argon-project\vite-project> npm install
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead

added 278 packages, and audited 279 packages in 44s

103 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
PS D:\react\Argon-project\vite-project> npm run dev

> vite-project@0.0.0 dev
> vite

VITE v5.3.3 ready in 2378 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help
9:38:30 am [vite] hmr update /src/App.jsx
9:38:40 am [vite] hmr update /src/App.jsx (x2)
9:38:46 am [vite] hmr update /src/App.jsx (x3)
9:38:46 am [vite] hmr update /src/App.jsx (x4)
9:38:50 am [vite] hmr update /src/App.jsx (x5)
9:38:51 am [vite] hmr update /src/App.jsx (x6)
9:39:20 am [vite] hmr update /src/App.jsx (x7)
9:39:26 am [vite] hmr update /src/App.jsx (x8)
9:39:26 am [vite] Internal server error: D:\react\Argon-project\vite-project\src\App.jsx: Expected corresponding JSX closing tag for <>. (19:6)

17 | </div>
18 | </div>

> 19 | </div>

     |       ^

20 | </>
21 | );
22 | }
Plugin: vite:react-babel
File: D:/react/Argon-project/vite-project/src/App.jsx:19:6
17 | </div>
18 | </div>
19 | </div>
| ^
20 | </>
21 | );
at constructor (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:351:19)
at JSXParserMixin.raise (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:3233:19)
at JSXParserMixin.jsxParseElementAt (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6737:14)
at JSXParserMixin.jsxParseElement (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6766:17)
at JSXParserMixin.parseExprAtom (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6776:19)
at JSXParserMixin.parseExprSubscripts (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10568:23)
at JSXParserMixin.parseUpdate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10551:21)
at JSXParserMixin.parseMaybeUnary (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10529:23)
at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10383:61)
at JSXParserMixin.parseExprOps (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10388:23)
at JSXParserMixin.parseMaybeConditional (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10365:23)
at JSXParserMixin.parseMaybeAssign (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10326:21)
at D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10296:39
at JSXParserMixin.allowInAnd (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:11920:12)
at JSXParserMixin.parseMaybeAssignAllowIn (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10296:17)
at JSXParserMixin.parseParenAndDistinguishExpression (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:11177:28)
at JSXParserMixin.parseExprAtom (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10835:23)
at JSXParserMixin.parseExprAtom (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6781:20)
at JSXParserMixin.parseExprSubscripts (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10568:23)
at JSXParserMixin.parseUpdate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10551:21)
at JSXParserMixin.parseMaybeUnary (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10529:23)
at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10383:61)
at JSXParserMixin.parseExprOps (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10388:23)
at JSXParserMixin.parseMaybeConditional (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10365:23)
at JSXParserMixin.parseMaybeAssign (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10326:21)
at JSXParserMixin.parseExpressionBase (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10280:23)
at D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10276:39
at JSXParserMixin.allowInAnd (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:11915:16)
at JSXParserMixin.parseExpression (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10276:17)
at JSXParserMixin.parseReturnStatement (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12603:28)
at JSXParserMixin.parseStatementContent (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12254:21)
at JSXParserMixin.parseStatementLike (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12223:17)
at JSXParserMixin.parseStatementListItem (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12203:17)
at JSXParserMixin.parseBlockOrModuleBlockBody (D:\react\Argon-project\vite-proj
... and 16 lines more
9:39:30 am [vite] hmr update /src/App.jsx
9:39:30 am [vite] Internal server error: D:\react\Argon-project\vite-project\src\App.jsx: Expected corresponding JSX closing tag for <>. (20:6)

18 | <h1>Vite + React</h1>
19 | </div>

> 20 | </div>

     |       ^

21 | </>
22 | );
23 | }
Plugin: vite:react-babel
File: D:/react/Argon-project/vite-project/src/App.jsx:20:6
18 | <h1>Vite + React</h1>
19 | </div>
20 | </div>
| ^
21 | </>
22 | );
at constructor (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:351:19)
at JSXParserMixin.raise (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:3233:19)
at JSXParserMixin.jsxParseElementAt (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6737:14)
at JSXParserMixin.jsxParseElement (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6766:17)
at JSXParserMixin.parseExprAtom (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6776:19)
at JSXParserMixin.parseExprSubscripts (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10568:23)
at JSXParserMixin.parseUpdate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10551:21)
at JSXParserMixin.parseMaybeUnary (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10529:23)
at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10383:61)
at JSXParserMixin.parseExprOps (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10388:23)
at JSXParserMixin.parseMaybeConditional (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10365:23)
at JSXParserMixin.parseMaybeAssign (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10326:21)
at D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10296:39
at JSXParserMixin.allowInAnd (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:11920:12)
at JSXParserMixin.parseMaybeAssignAllowIn (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10296:17)
at JSXParserMixin.parseParenAndDistinguishExpression (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:11177:28)
at JSXParserMixin.parseExprAtom (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10835:23)
at JSXParserMixin.parseExprAtom (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:6781:20)
at JSXParserMixin.parseExprSubscripts (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10568:23)
at JSXParserMixin.parseUpdate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10551:21)
at JSXParserMixin.parseMaybeUnary (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10529:23)
at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10383:61)
at JSXParserMixin.parseExprOps (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10388:23)
at JSXParserMixin.parseMaybeConditional (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10365:23)
at JSXParserMixin.parseMaybeAssign (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10326:21)
at JSXParserMixin.parseExpressionBase (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10280:23)
at D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10276:39
at JSXParserMixin.allowInAnd (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:11915:16)
at JSXParserMixin.parseExpression (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:10276:17)
at JSXParserMixin.parseReturnStatement (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12603:28)
at JSXParserMixin.parseStatementContent (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12254:21)
at JSXParserMixin.parseStatementLike (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12223:17)
at JSXParserMixin.parseStatementListItem (D:\react\Argon-project\vite-project\node_modules\@babel\parser\lib\index.js:12203
... and 17 lines more
9:39:32 am [vite] hmr update /src/App.jsx
9:40:04 am [vite] hmr update /src/App.jsx (x2)
9:40:10 am [vite] hmr update /src/App.jsx (x3)
9:40:51 am [vite] hmr update /src/App.jsx (x4)
9:41:26 am [vite] hmr update /src/App.jsx (x5)
9:41:26 am [vite] hmr update /src/App.jsx (x6)
9:41:35 am [vite] hmr update /src/App.jsx (x7)
9:41:35 am [vite] hmr update /src/App.jsx (x8)
9:41:35 am [vite] hmr update /src/App.jsx (x9)
9:42:29 am [vite] hmr update /src/App.jsx (x10)
9:42:44 am [vite] hmr update /src/App.jsx (x11)
9:42:45 am [vite] hmr update /src/App.jsx (x12)
9:43:44 am [vite] hmr update /src/App.jsx (x13)
9:44:00 am [vite] hmr update /src/App.jsx (x14)
9:44:01 am [vite] hmr update /src/App.jsx (x15)
