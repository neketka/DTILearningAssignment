# DTILearningAssignment

- Your own summary of the purpose of the technology

TypeScript is a statically-typed version of JavaScript allowing for type-checking
at compile-time so that bugs related to typing are discovered early, and
The purpose of the Vue framework is to create a central structure for a web or
native (through NativeScript) application using reusable and composable
components that contain markup, logical, and styling information. Much like
React, the components communicate in a one-way data binding methods called props
that pass information from parent to child. Unlike React, these components can
also send cascading information through the form of events, sending information
from child to parent and cascading up the hierarchy until it is handled. On,
occasion, the "v-model" can provide a pseudo-two-way data binding though an
event handler attached to a variable controlling a prop. The components are part
of a virtual DOM, represented as a JavaScript object hierarchy rather than as
part of the browser's DOM. Vue also defines a domain-specific language using
directives such as "v-for" and "v-if" to control components' representation in
the DOM, providing functionality such as visibility control and conversion of
arrays of data to arrays of components. Vue creates structure in the form of
single-file components that include functionality like props and computed
properties through the "options API," allowing for concise components. Firebase
is a backend-as-a-service service provided by Google to accelerate app
development by providing many types of backend functionality out-of-the-box.
Services like user registation and NoSQL database are provided for easy
consumption on the frontend, supplemented by cloud functions for custom backend
functionality. It offers an opinionated, secure way to create an application
that will make development faster.

- What problems does it solve? Pros and cons

TypeScript solves the problem of JavaScript's lack of typing, so any errors are
discovered early and dev-iteration time is decreased. As such, applications
are better designed, and are more easily understood by code validators and smart
code completion tools, accelerating development by decreasing time spend browsing code
Vue solves the problem of lack of modularity in the browser by creating
abstractions known as components. The declarative method of content creation
offers a lot more flexibility than just manipulating the DOM through document or
through JQuery. Single-Page applications become much easier to make. The use
of the virtual DOM is faster than manipulating the browser DOM, so more
performance is gained through the VDOM diffing process than recycling and
manipulating DOM nodes. One downside is the size that it adds to an application.
This limits users on mobile devices in slower internet areas that have limited
bandwidth to spare. Additionally, well-designed DOM manipulation can be far
superior in performance than VDOM to DOM conversion, though the ease-of-use
far makes up for that downfall. Unlike React, Vue uses its own DSL to provide
conditional rendering and looping, so it adds a little weight to the learning
curve, something React makes up for with JSX and the ability to use JavaScript
to create VDOM nodes. Firebase significantly reduces development time for basic
services where a backend developer might be required. But, it significantly
slows development time if more flexibility than if can provide is required,
though many application will never run into this problem. Firebase is extremely
easy to get up and running, so developerss can focus on delivering an experience
to users through the frontend while firebase takes care of the backend work.

- Use your personal repo as as example, illustrate how is this technology applied (how to use the framework, workflow)

Vue was applied to create a simple employee management system that employs
conditional rendering to create dynamic entering functionality and loop
rendering was applied to render the data arrays of these various employees.
The workflow was simple with "vue cli" providing all the boilerplate I needed to
get up and running. Firebase was applied to create simple register, login, home
page flow for a web app, storing user data. It was easy to follow Google's
project creation tool and add the functionality to a local Vue project. Vuex
was used to create a single source of truth and link the firebase functionality
to Vue's reactivity system. Vue router was used to create a simple routing
experience for a single-page application. Vuetify was used to create a nicely-
styled application through simple components providing elements of the Material
Design specification.

- How do you plan to use this technology in your subteam's codebase later

In (of) CoursePlan, I plan to use Vue to further expand the frontend experience
for end-users and expand the functionality of the web app. I will use firebase
to save requirement, user, and course data where applicable, and manage user
logins and registration.
