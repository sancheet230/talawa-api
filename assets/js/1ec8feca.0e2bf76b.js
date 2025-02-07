"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2331],{57065:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"docs/developer-resources/testing","title":"Testing & Validation","description":"This section covers important tests to validate the operation of the API.","source":"@site/docs/docs/developer-resources/testing.md","sourceDirName":"docs/developer-resources","slug":"/developer-resources/testing","permalink":"/docs/developer-resources/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/developer-resources/testing.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"testing","title":"Testing & Validation","slug":"/developer-resources/testing","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Operation","permalink":"/docs/developer-resources/operation"},"next":{"title":"Operation","permalink":"/docs/developer-resources/troubleshooting"}}');var a=s(86070),r=s(60385);const t={id:"testing",title:"Testing & Validation",slug:"/developer-resources/testing",sidebar_position:4},o=void 0,l={},d=[{value:"Accessing the API",id:"accessing-the-api",level:2},{value:"Validation",id:"validation",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Interactive Web Queries With GraphiQL",id:"interactive-web-queries-with-graphiql",level:4},{value:"Programmatic Queries With GraphiQL",id:"programmatic-queries-with-graphiql",level:4},{value:"Subscriptions with GraphQL",id:"subscriptions-with-graphql",level:4},{value:"Accessing the API in Talawa App Using Remote Access",id:"accessing-the-api-in-talawa-app-using-remote-access",level:4},{value:"Database Management",id:"database-management",level:2},{value:"CloudBeaver",id:"cloudbeaver",level:3},{value:"Accessing the PostgreSQL Database using CloudBeaver",id:"accessing-the-postgresql-database-using-cloudbeaver",level:4},{value:"Accessing the PostgreSQL Test Database using CloudBeaver",id:"accessing-the-postgresql-test-database-using-cloudbeaver",level:4},{value:"Object Storage Management",id:"object-storage-management",level:2},{value:"Accessing MinIO - (Production Environments)",id:"accessing-minio---production-environments",level:3},{value:"Accessing MinIO - (Development Environments)",id:"accessing-minio---development-environments",level:3},{value:"Resetting Docker",id:"resetting-docker",level:2},{value:"Testing The API",id:"testing-the-api",level:2},{value:"Using Curl",id:"using-curl",level:3},{value:"Sign-in",id:"sign-in",level:4},{value:"Organization Creation",id:"organization-creation",level:4},{value:"Using GraphiQL",id:"using-graphiql",level:3},{value:"Signing in as Administrator",id:"signing-in-as-administrator",level:4},{value:"Promote a Registered User to an Administrator",id:"promote-a-registered-user-to-an-administrator",level:4},{value:"Creating Organizations",id:"creating-organizations",level:4},{value:"Create an Organization Administrator",id:"create-an-organization-administrator",level:4}];function c(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This section covers important tests to validate the operation of the API."}),"\n",(0,a.jsx)(n.h2,{id:"accessing-the-api",children:"Accessing the API"}),"\n",(0,a.jsx)(n.p,{children:"These are some important URLs for coding and troubleshooting:"}),"\n",(0,a.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"By default talawa-api runs on port 4000. It is available on the following endpoint:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://127.0.0.1:4000\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If you navigate to the endpoint you and see a JSON response like this."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Route GET:/ not found",\n  "error": "Not Found",\n  "statusCode": 404\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,a.jsx)(n.p,{children:"This section covers how to access the GraphQL API interface."}),"\n",(0,a.jsx)(n.h4,{id:"interactive-web-queries-with-graphiql",children:"Interactive Web Queries With GraphiQL"}),"\n",(0,a.jsx)(n.p,{children:"The url for accessing the GraphQL Playground is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http://127.0.0.1:4000/graphiql\n"})}),"\n",(0,a.jsx)(n.h4,{id:"programmatic-queries-with-graphiql",children:"Programmatic Queries With GraphiQL"}),"\n",(0,a.jsxs)(n.p,{children:["The graphQL endpoint for handling ",(0,a.jsx)(n.code,{children:"queries"})," and ",(0,a.jsx)(n.code,{children:"mutations"})," is this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://127.0.0.1:4000/graphql\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["This is the Organization URL to be used for:","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The Talawa Mobile app"}),"\n",(0,a.jsx)(n.li,{children:"The Talawa Admin app"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If you navigate to the endpoint you and see a JSON response like this."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{ "data": null, "errors": [{ "message": "Unknown query" }] }\n'})}),"\n",(0,a.jsx)(n.h4,{id:"subscriptions-with-graphql",children:"Subscriptions with GraphQL"}),"\n",(0,a.jsxs)(n.p,{children:["The GraphQL endpoint for handling ",(0,a.jsx)(n.code,{children:"subscriptions"})," is:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ws://127.0.0.1:4000/graphql\n"})}),"\n",(0,a.jsx)(n.h4,{id:"accessing-the-api-in-talawa-app-using-remote-access",children:"Accessing the API in Talawa App Using Remote Access"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Launch the terminal application on your device."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Retrieve IPv4 Address"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"For Windows Users"}),": Enter the command ",(0,a.jsx)(n.code,{children:"ipconfig"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"For Linux/OSX Users"}),": Enter the command ",(0,a.jsx)(n.code,{children:"ifconfig"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Copy the ",(0,a.jsx)(n.code,{children:"IPv4 Address"})," displayed (e.g., ",(0,a.jsx)(n.code,{children:"192.168.12.233"}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make sure both your mobile and your computer are connected to the same network."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use the following format for your endpoint:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://<IPv4 address>:4000/graphql\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"<IPv4 Address>"})," with the actual IP address you copied in step 2."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": In the Talawa app, type the endpoint URL in the field labeled ",(0,a.jsx)(n.code,{children:"Enter Community URL"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"database-management",children:"Database Management"}),"\n",(0,a.jsx)(n.p,{children:"This section covers easy ways for developers to validate their work"}),"\n",(0,a.jsx)(n.h3,{id:"cloudbeaver",children:"CloudBeaver"}),"\n",(0,a.jsx)(n.p,{children:"CloudBeaver is a lightweight web application designed for comprehensive data management. It allows you to work with various data sources, including SQL, NoSQL, and cloud databases, all through a single secure cloud solution accessible via a browser."}),"\n",(0,a.jsx)(n.h4,{id:"accessing-the-postgresql-database-using-cloudbeaver",children:"Accessing the PostgreSQL Database using CloudBeaver"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open your preferred browser and navigate to:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http://127.0.0.1:8978/\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Log in to the CloudBeaver UI using the following credentials (these credentials can be modified in the ",(0,a.jsx)(n.code,{children:".env.devcontainer"})," file by changing the ",(0,a.jsx)(n.code,{children:"CLOUDBEAVER_ADMIN_NAME"})," and ",(0,a.jsx)(n.code,{children:"CLOUDBEAVER_ADMIN_PASSWORD"})," variables):","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Username: talawa\nPassword: password\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:['You should now see the CloudBeaver UI. Click on the "New Connection" button and select ',(0,a.jsx)(n.code,{children:"PostgreSQL"})," from the list of available connections."]}),"\n",(0,a.jsxs)(n.li,{children:["Fill in the connection details as follows:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Name: talawa\nHost: postgres\nPort: 5432\nDatabase: talawa\nUsername: talawa\nPassword: password\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The host name should match the one specified in the Docker Compose file and credentials should match those specified in the ",(0,a.jsx)(n.code,{children:".env.development"})," file."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Check the ",(0,a.jsx)(n.code,{children:"Save credentials for all users with access"})," option to avoid entering the credentials each time."]}),"\n",(0,a.jsxs)(n.li,{children:["Check the following boxes in the Database list:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"show all databases\nshow template databases\nshow unavailable databases\nshow database statistics\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.code,{children:"Create"})," to save the connection."]}),"\n",(0,a.jsxs)(n.li,{children:["You should now see the ",(0,a.jsx)(n.code,{children:"PostgreSql@postgres"})," connection in the list of available connections. Click on the connection to open the database."]}),"\n",(0,a.jsxs)(n.li,{children:["Navigate to ",(0,a.jsx)(n.code,{children:"PostgreSql@postgres > Databases > talawa > Schemas > public > Tables"})," to view the available schemas."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"accessing-the-postgresql-test-database-using-cloudbeaver",children:"Accessing the PostgreSQL Test Database using CloudBeaver"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click on the ",(0,a.jsx)(n.code,{children:"New Connection"})," button and select ",(0,a.jsx)(n.code,{children:"PostgreSQL"})," from the list of available connections."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fill in the connection details as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Name: talawa\nHost: postgrestest\nPort: 5432\nDatabase: talawa\nUsername: talawa\nPassword: password\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The host name should match the one specified in the Docker Compose file and credentials should match those specified in the ",(0,a.jsx)(n.code,{children:".env.development"})," file."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check the ",(0,a.jsx)(n.code,{children:"Save credentials for all users with access"})," option to avoid entering the credentials each time."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Check the following boxes in the Database list:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"show all databases\nshow template databases\nshow unavailable databases\nshow database statistics\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.code,{children:"Create"})," to save the connection."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You should now see the ",(0,a.jsx)(n.code,{children:"PostgreSql@postgres-test"})," connection in the list of available connections. Click on the connection to open the database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Navigate to ",(0,a.jsx)(n.code,{children:"PostgreSql@postgres-test > Databases > talawa > Schemas > public > Tables"})," to view the available tables."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"object-storage-management",children:"Object Storage Management"}),"\n",(0,a.jsx)(n.p,{children:"MinIO is a free, open-source object storage server that's compatible with Amazon S3. It's designed for large-scale data storage and can run on-premises or in the cloud."}),"\n",(0,a.jsx)(n.h3,{id:"accessing-minio---production-environments",children:"Accessing MinIO - (Production Environments)"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open your preferred browser and navigate to:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http://127.0.0.1:9001/\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Log in to the MinIO UI using the following credentials(these credentials can be modified in the env files by changing the ",(0,a.jsx)(n.code,{children:"MINIO_ROOT_USER"})," and ",(0,a.jsx)(n.code,{children:"MINIO_ROOT_PASSWORD"})," variables):","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Username: ",(0,a.jsx)(n.code,{children:"talawa"})]}),"\n",(0,a.jsxs)(n.li,{children:["Password: ",(0,a.jsx)(n.code,{children:"password"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["You should now see the MinIO UI. Click on the ",(0,a.jsx)(n.code,{children:"Login"})," button to access the MinIO dashboard."]}),"\n",(0,a.jsx)(n.li,{children:"You can now view the available buckets and objects in the MinIO dashboard."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"accessing-minio---development-environments",children:"Accessing MinIO - (Development Environments)"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open your preferred browser and navigate to:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http://127.0.0.1:9003/\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Log in to the MinIO UI using the following credentials(these credentials can be modified in the ",(0,a.jsx)(n.code,{children:".env.devcontainer"})," file by changing the ",(0,a.jsx)(n.code,{children:"MINIO_ROOT_USER"})," and ",(0,a.jsx)(n.code,{children:"MINIO_ROOT_PASSWORD"})," variables):","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Username: ",(0,a.jsx)(n.code,{children:"talawa"})]}),"\n",(0,a.jsxs)(n.li,{children:["Password: ",(0,a.jsx)(n.code,{children:"password"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["You should now see the MinIO UI. Click on the ",(0,a.jsx)(n.code,{children:"Login"})," button to access the MinIO dashboard."]}),"\n",(0,a.jsx)(n.li,{children:"You can now view the available buckets and objects in the MinIO dashboard."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"resetting-docker",children:"Resetting Docker"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NOTE:"})," This applies only to Talawa API developers."]}),"\n",(0,a.jsx)(n.p,{children:"Sometimes you may want to start all over again from scratch. These steps will reset your development docker environment."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["From the repository's root directory, use this command to shutdown the dev container.","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker compose down\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"WARNING:"})," These commands will stop ",(0,a.jsx)(n.strong,{children:"ALL"})," your Docker processes and delete their volumes. This applies not only to the Talawa API instances, but everything. Use with extreme caution.","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker stop $(docker ps -q)\ndocker rm $(docker ps -a -q)\ndocker rmi $(docker images -q)\ndocker volume prune -f\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Restart the Docker dev containers to resume your development work.","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"devcontainer build --workspace-folder .\ndevcontainer up --workspace-folder .\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Now you can resume your development work."}),"\n",(0,a.jsx)(n.h2,{id:"testing-the-api",children:"Testing The API"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"API_BASE_URL"})," URL configured in the ",(0,a.jsx)(n.code,{children:".env"})," file. As the endpoint uses GraphQL, the complete URL will be ",(0,a.jsx)(n.code,{children:"API_BASE_URL/graphql"})]}),"\n",(0,a.jsx)(n.h3,{id:"using-curl",children:"Using Curl"}),"\n",(0,a.jsx)(n.p,{children:"This section shows how to do some basic transactions using CURL"}),"\n",(0,a.jsx)(n.h4,{id:"sign-in",children:"Sign-in"}),"\n",(0,a.jsx)(n.p,{children:"This endpoint is used to sign in a user."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\ncurl -X POST -H "Content-Type: application/json" -k <API_BASE_URL>/graphql -d \'{\n  "query": "query signIn($input: QuerySignInInput!) { signIn(input: $input) { authenticationToken user { emailAddress id name } } }",\n  "variables": {\n    "input": {\n      "emailAddress": "administrator@email.com",\n      "password": "password"\n    }\n  }\n}\'\n\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request Headers:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request Body:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "query": "query signIn($input: QuerySignInInput!) { signIn(input: $input) { authenticationToken user { emailAddress id name } } }",\n  "variables": {\n    "input": {\n      "emailAddress": "administrator@email.com",\n      "password": "password"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Response:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Returns the authentication token and user details (email address, id, and name)."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"organization-creation",children:"Organization Creation"}),"\n",(0,a.jsx)(n.p,{children:"This endpoint is used to create a new organization."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <your_token>" -k  <API_BASE_URL>/graphql -d \'{\n  "query": "mutation Mutation_createOrganization($input: MutationCreateOrganizationInput!) { createOrganization(input: $input) { id name } }",\n  "variables": {\n    "input": {\n      "name": "name0"\n    }\n  }\n}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request Headers:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Authorization: Bearer <your_token>"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request Body:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "query": "mutation Mutation_createOrganization($input: MutationCreateOrganizationInput!) { createOrganization(input: $input) { id name } }",\n  "variables": {\n    "input": {\n      "name": "name0"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Response:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Returns the newly created organization's ID and name."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"using-graphiql",children:"Using GraphiQL"}),"\n",(0,a.jsx)(n.p,{children:"Here are some basic commands you can use for testing"}),"\n",(0,a.jsx)(n.h4,{id:"signing-in-as-administrator",children:"Signing in as Administrator"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following GraphQL ",(0,a.jsx)(n.strong,{children:"query"})," to get an ",(0,a.jsx)(n.strong,{children:"authentication token"})," for authorization in later queries:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  signIn(\n    input: { emailAddress: "administrator@email.com", password: "password" }\n  ) {\n    authenticationToken\n    user {\n      id\n      name\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"promote-a-registered-user-to-an-administrator",children:"Promote a Registered User to an Administrator"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following GraphQL ",(0,a.jsx)(n.strong,{children:"mutation"})," to assign ",(0,a.jsx)(n.strong,{children:"administrator"})," role to user:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  updateUser(input: { id: "user-id", role: administrator }) {\n    id\n    name\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"creating-organizations",children:"Creating Organizations"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following GraphQL ",(0,a.jsx)(n.strong,{children:"mutation"})," to create an organization:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createOrganization(\n    input: {\n      addressLine1: "Los Angeles"\n      addressLine2: "USA"\n      city: "Los Angeles"\n      countryCode: in\n      description: "testing"\n      name: "Test Org 7"\n      postalCode: "876876"\n      state: "California"\n    }\n  ) {\n    id\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-an-organization-administrator",children:"Create an Organization Administrator"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following GraphQL ",(0,a.jsx)(n.strong,{children:"mutation"})," to assign ",(0,a.jsx)(n.strong,{children:"administrator"})," role to user:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createOrganizationMembership(\n    input: {\n      memberId: "user-id"\n      organizationId: "org-id"\n      role: administrator\n    }\n  ) {\n    id\n    name\n    addressLine1\n    createdAt\n    members(first: 5) {\n      pageInfo {\n        hasNextPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},60385:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(30758);const a={},r=i.createContext(a);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);