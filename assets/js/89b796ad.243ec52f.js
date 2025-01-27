"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3361],{99972:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/developer-resources/pnpm-scripts","title":"PNPM Scripts","description":"The scripts listed below are used with pnpm for many different workflows of talawa api.","source":"@site/docs/docs/developer-resources/pnpm-scripts.md","sourceDirName":"docs/developer-resources","slug":"/developer-resources/pnpm-scripts","permalink":"/docs/developer-resources/pnpm-scripts","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/developer-resources/pnpm-scripts.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"pnpm-scripts","title":"PNPM Scripts","slug":"/developer-resources/pnpm-scripts","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/developer-resources/introduction"},"next":{"title":"Operation","permalink":"/docs/developer-resources/operation"}}');var r=n(86070),s=n(6599);const o={id:"pnpm-scripts",title:"PNPM Scripts",slug:"/developer-resources/pnpm-scripts",sidebar_position:2},a=void 0,d={},l=[{value:"pnpm apply_drizzle_migrations",id:"pnpm-apply_drizzle_migrations",level:2},{value:"pnpm apply_drizzle_test_migrations",id:"pnpm-apply_drizzle_test_migrations",level:2},{value:"pnpm build_production",id:"pnpm-build_production",level:2},{value:"pnpm check_code_quality",id:"pnpm-check_code_quality",level:2},{value:"pnpm check_drizzle_migrations",id:"pnpm-check_drizzle_migrations",level:2},{value:"pnpm check_type_errors",id:"pnpm-check_type_errors",level:2},{value:"pnpm disable_git_hooks",id:"pnpm-disable_git_hooks",level:2},{value:"pnpm drop_drizzle_migrations",id:"pnpm-drop_drizzle_migrations",level:2},{value:"pnpm enable_git_hooks",id:"pnpm-enable_git_hooks",level:2},{value:"pnpm fix_code_quality",id:"pnpm-fix_code_quality",level:2},{value:"pnpm generate_drizzle_migrations",id:"pnpm-generate_drizzle_migrations",level:2},{value:"pnpm generate_graphql_sdl_file",id:"pnpm-generate_graphql_sdl_file",level:2},{value:"pnpm generate_gql_tada",id:"pnpm-generate_gql_tada",level:2},{value:"pnpm push_drizzle_schema",id:"pnpm-push_drizzle_schema",level:2},{value:"pnpm push_drizzle_test_schema",id:"pnpm-push_drizzle_test_schema",level:2},{value:"pnpm run_tests",id:"pnpm-run_tests",level:2},{value:"pnpm start_development_server",id:"pnpm-start_development_server",level:2},{value:"pnpm start_development_server_with_debugger",id:"pnpm-start_development_server_with_debugger",level:2},{value:"pnpm start_production_server",id:"pnpm-start_production_server",level:2},{value:"pnpm start_production_server_with_debugger",id:"pnpm-start_production_server_with_debugger",level:2},{value:"pnpm upgrade_drizzle_metadata",id:"pnpm-upgrade_drizzle_metadata",level:2}];function p(e){const i={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"The scripts listed below are used with pnpm for many different workflows of talawa api."}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-apply_drizzle_migrations",children:"pnpm apply_drizzle_migrations"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to apply the sql migration files present in the ",(0,r.jsx)(i.code,{children:"drizzle_migrations"})," directory to the postgres database being used by talawa api."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-apply_drizzle_test_migrations",children:"pnpm apply_drizzle_test_migrations"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to apply the sql migration files present in the ",(0,r.jsx)(i.code,{children:"drizzle_migrations"})," directory to the postgres test database being used by talawa api."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-build_production",children:"pnpm build_production"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to create a production build of the talawa api codebase by transpiling the typescript code to javascript code and also getting rid of unnecessary stuff not needed in production."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://swc.rs/docs/usage/cli",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-check_code_quality",children:"pnpm check_code_quality"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to check the linting and formatting issues in the codebase."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://biomejs.dev/reference/cli/#biome-check",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-check_drizzle_migrations",children:"pnpm check_drizzle_migrations"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to check for inconsistencies and collisions in the sql migration files in the ",(0,r.jsx)(i.code,{children:"drizzle_migrations"})," directory that could arise because of many contributers contributing to the project."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-check_type_errors",children:"pnpm check_type_errors"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to check the type errors in the codebase using typescript compiler."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#using-the-cli",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-disable_git_hooks",children:"pnpm disable_git_hooks"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to disable the git hooks that automate some repetitive workflows related to git."}),"\n",(0,r.jsxs)(i.p,{children:["More information can be found ",(0,r.jsx)(i.a,{href:"https://evilmartians.github.io/lefthook/usage/commands.html?highlight=lefthook%20uninstall#lefthook-uninstall",children:"this"})," link."]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-drop_drizzle_migrations",children:"pnpm drop_drizzle_migrations"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to delete the existing sql migration files in the ",(0,r.jsx)(i.code,{children:"drizzle_migrations"})," directory as their manual deletion would break drizzle-kit."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-enable_git_hooks",children:"pnpm enable_git_hooks"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to enable the git hooks that automate some repetitive workflows related to git."}),"\n",(0,r.jsxs)(i.p,{children:["More information can be found ",(0,r.jsx)(i.a,{href:"https://evilmartians.github.io/lefthook/usage/commands.html?highlight=lefthook%20install#lefthook-install",children:"this"})," link."]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-fix_code_quality",children:"pnpm fix_code_quality"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to fix as many linting and formatting issues in the codebase as possible for being auto-fixed. Output of this command resulting in a failure means that there are some issues that need to be fixed manually."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://biomejs.dev/reference/cli/#biome-check",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-generate_drizzle_migrations",children:"pnpm generate_drizzle_migrations"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to generate the sql migration files in the ",(0,r.jsx)(i.code,{children:"drizzle_migrations"})," directory that reflect the latest state of the drizzle schema in the codebase."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-generate_graphql_sdl_file",children:"pnpm generate_graphql_sdl_file"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to generate the graphql schema definition language file for talawa api's graphql implementation at the root directory of this workspace in a file named ",(0,r.jsx)(i.code,{children:"schema.graphql"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-generate_gql_tada",children:"pnpm generate_gql_tada"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to generate the files containing the typescript types corresponding to talawa api's graphql implementation and ahead of time graphql document type cache corresponding to the graphql operation documents used in integration tests for talawa api's graphql implementation. This is done by inferring them from the graphql sdl file present at the root directory of this workspace in the file name ",(0,r.jsx)(i.code,{children:"schema.graphql"})," and the graphql operation documents present within the the directory named ",(0,r.jsx)(i.code,{children:"test"})," at the root directory of this workspace."]}),"\n",(0,r.jsx)(i.p,{children:"More information can be found at these links:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://gql-tada.0no.co/reference/config-format#tadaoutputlocation",children:"https://gql-tada.0no.co/reference/config-format#tadaoutputlocation"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://gql-tada.0no.co/reference/config-format#tadaturbolocation",children:"https://gql-tada.0no.co/reference/config-format#tadaturbolocation"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-push_drizzle_schema",children:"pnpm push_drizzle_schema"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to push the changes in the drizzle-orm schema in the codebase to the postgres database for rapid local development(prototyping) without having to handle generating and applying the drizzle migration files after each little change."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-push_drizzle_test_schema",children:"pnpm push_drizzle_test_schema"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to push the changes in the drizzle-orm schema in the codebase to the postgres test database for rapid local development(prototyping) without having to handle generating and applying the drizzle migration files after each little change."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-run_tests",children:"pnpm run_tests"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to run the integration tests for talawa api."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://vitest.dev/",children:"this"})," link."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-start_development_server",children:"pnpm start_development_server"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to concurrently start the development server of talawa api in watch mode and the typescript compiler in watch mode to check for type errors."}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-start_development_server_with_debugger",children:"pnpm start_development_server_with_debugger"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to start the development server of talawa api and a debugger attached to that process on host ",(0,r.jsx)(i.code,{children:"127.0.0.1"})," and port ",(0,r.jsx)(i.code,{children:"9229"})," by default that are customizable through the environment variables ",(0,r.jsx)(i.code,{children:"$API_DEBUGGER_HOST"})," and ",(0,r.jsx)(i.code,{children:"$API_DEBUGGER_PORT"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"More information at these links:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://nodejs.org/en/learn/getting-started/debugging",children:"https://nodejs.org/en/learn/getting-started/debugging"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://nodejs.org/api/debugger.html",children:"https://nodejs.org/api/debugger.html"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-start_production_server",children:"pnpm start_production_server"}),"\n",(0,r.jsx)(i.p,{children:"This command is used to start the production server of talawa api."}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-start_production_server_with_debugger",children:"pnpm start_production_server_with_debugger"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to start the production server of talawa api and a debugger attached to that process on host ",(0,r.jsx)(i.code,{children:"127.0.0.1"})," and port ",(0,r.jsx)(i.code,{children:"9229"})," by default that are customizable through the environment variables ",(0,r.jsx)(i.code,{children:"$API_DEBUGGER_HOST"})," and ",(0,r.jsx)(i.code,{children:"$API_DEBUGGER_PORT"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"More information at these links:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://nodejs.org/en/learn/getting-started/debugging",children:"https://nodejs.org/en/learn/getting-started/debugging"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://nodejs.org/api/debugger.html",children:"https://nodejs.org/api/debugger.html"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"pnpm-upgrade_drizzle_metadata",children:"pnpm upgrade_drizzle_metadata"}),"\n",(0,r.jsxs)(i.p,{children:["This command is used to keep the drizzle metadata in the ",(0,r.jsx)(i.code,{children:"drizzle_migrations/_meta"})," directory up to date with the latest changes in drizzle-orm and drizzle-kit."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["More information can be found at ",(0,r.jsx)(i.a,{href:"https://orm.drizzle.team/docs/kit-overview",children:"this"})," link."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6599:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(30758);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);