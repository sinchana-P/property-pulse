# Next.js?

- Both SSR & SSG Framework
  - SSR - Server Side Rendered
  - SSG - Server Side Generated

# Next.js Features

- File-Based Routing - Naming convention
- React Server Components - Comp rendered on server
- Data Fetching - RSC, no need of useEffect hook, loading - spinner
- Server Actions - Async funs, executed on server. can be used in client comps as well. Use these with Forms, action attribute.
- API Routes - GET, POST, PUT, DELETE Requests
- Environment Variables - settings, db con strings, etc
- Customizable Meta / SEO - we can hv any Meta tags
- Image Optimation - Img component, utiize thngs like Lazy loading
- Automatic Code Splitting - Next JS only loads JS & CSS files tht r required for tht particular page & this gives users a much faster experience with a nearly instant page laod.
- Typescript Support - Next js built in TS, providing static typing & improved developer tooling for type safety
- CSS Support - there’s in built in support for things like CSS in JS libraries like - styled components or emotion, tailwind.
- Fast Refresh - instant feedback
- Deployment - service like Vercel

# Server vs Client Components

- Server Components
1. Reduce Complexity
2. Direct Access to ORM [Mongoose, Prisma, Sqlize]
3. Better SEO
4. Secret Values Not Exposed [API Keys, Access Token]

- Client Components
1. More Interactive
2. Use React Hooks
3. To make a component client-side
- 'use client'
