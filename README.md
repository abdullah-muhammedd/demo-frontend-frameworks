The project that is used to measure the bundle size is the same exact project 

- Setup: Framework + TawillindCSS
- Three components
    - A page contains a component that fetches some blog posts and display them in a grid the important note is the blogs are fetched in build time in all three projects
    - A page contains a component with a counter and a button to increase this counter
    - A home Page contains only two links for these pages

| **Feature** | **Next.js** | **SvelteKit** | **Astro** | **Angular (with Angular Universal)** |
| --- | --- | --- | --- | --- |
| **Supports SSG (Static Site Generation)** | Supports SSG via **static exports**. Static pages are generated at build time. However, many Next.js features **depend on its Node.js server environment**, which **won't work** in a pure SSG deployment, including:- API Routes- Rewrites & Redirects- Middleware- ISR (Incremental Static Regeneration)- Server Actions | Supports SSG via **prerendering** and `@sveltejs/adapter-static`. You can mark specific pages or the entire app as prerendered. Configuration is simple and flexible. | **SSG by default.** Astro **prerenders to HTML**, and only interactive components add JavaScript. Ships **0 KB JS by default**, making it extremely optimized for static sites. | Supports SSG through **Angular Universal**, enabling server-side rendering and prerendering. This improves performance and SEO by serving pre-rendered HTML to users. |
| **Strongly Typed Client-side Templates** | Uses **TypeScript + JSX** for strongly typed templates. Type safety is robust inside `.tsx` files. | Supports **TypeScript in `.svelte` files**, but type safety is somewhat looser compared to Next.js. | Templates are written in **Astro (`.astro`) files**, with **TypeScript supported inside scripts**. Interactive components (React/Svelte/Vue) can be fully typed. **With well-defined conventions, type issues can be avoided.** | Built entirely with **TypeScript**, offering strong typing throughout the application. Templates are integrated within the TypeScript code, ensuring consistent type safety. |
| **Bundle Size (Baseline Test)** | ❌ **~1.8MB** for a basic project using React. React hydration adds extra weight | **~196KB** because **Svelte compiles away the framework**, producing highly optimized JS. No virtual DOM means minimal runtime overhead. | **~200KB**. Astro ships **0 KB JS by default**, and only **hydrated components** add JS. **By far the most lightweight framework for static sites.** | **~2.10 MB for the whole build** and 300KB for browser directory  (I think we deploy this browser directory to google cloud storage/buckets) |
| **Lazy Loading (Out-of-the-box)** | **Built-in support** via `next/dynamic`. You can dynamically import components with SSR or SSG. | **Uses native `import()` + hydration control.** Components can be loaded lazily on interaction. | **Fully supports lazy loading**. Components **hydrate only when needed**, using directives like `client:load`, `client:idle`, `client:visible`. **Best-in-class control over hydration.** | **Built-in support** for lazy loading modules using Angular's router. This allows parts of the application to load on demand, improving performance. |
| **SEO Friendly (No SPA, SSR, or Hybrid)** | **Yes, but…** Next.js supports SSG for static pages, but **default Next.js projects rely on hydration-heavy SPAs**. Requires extra optimization to reduce hydration. | **Yes,** prerendered pages are pure **static HTML**, making them SEO-friendly. Some interactivity still requires hydration. | **Most SEO-friendly**. **Astro serves clean HTML upfront** with minimal JavaScript. Best choice for content-heavy, SEO-focused websites. | **Yes,** with **Angular Universal**, applications benefit from server-side rendering, serving pre-rendered HTML to users, which enhances SEO and performance. |
| **Learning Curve** | **Medium** (Familiar to React devs, but introduces a lot of new Next.js-specific features.) | **Medium** (Uses **different syntax & conventions** compared to React, but simpler than Next.js overall.) | **Easy** (Can use React, Svelte, Vue inside `.astro` files. Uses Vite, which most React devs are familiar with.) | **Steep** (Angular is a comprehensive framework with a strict structure. It requires learning its specific architecture, TypeScript, and RxJS.) |
| **Cons** | ❌ Hydration-heavy, requires optimization for performance.❌ Some core Next.js features **don't work with SSG alone**. | ❌ Different syntax compared to React, requires learning new conventions.❌ Less ecosystem support than React frameworks. | ❌ It uses its own state management which is not a big problem once get familiar with it.❌ Hydration must be managed manually using directives for interactive parts. | ❌ Steep learning curve.❌ Larger bundle sizes compared to other frameworks.❌ Complexity can lead to longer development times. |
