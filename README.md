# Day 28 - GUVI

## React useContext Task

> - [Source Code](./src/)
> - The project is styles using raw CSS only.
> - The project code is seperated into folders for increased readability.
> - Props drilling is a concept where data is passed through children components to reach a component, but the data is not needed by other childring components in the pipeline.
> - Example, if we wish to pass a data from components A to E, we need to pass it to the children in between.
> - The sequence is now as follows: A->B->C->D->E.
> - The components B, C and D are now getting the data which these components do not need.
> - To overcome this scenario, we use the `useContextAPI`.
> - The UI is replicated from the reference.
> - The data is populated from the [Data](./src/data/products.js) file.
> - The data is rendered through cards and the values are rendered.
> - The total value is preserved and initially calculated in the TotalContext file. [Source](./src/contexts/TotalContext.jsx)
> - We create the context using `createContext()`.
> - This context is provided by creating an exportable function which gets a special prop called as `children`, to add dynamic nature to the Context Provider.
> - The value of the context is exported as a hook `useTotal`.
> - Custom logic is applied for handling re-renders and calculations.
> - The UI is made completely responsive using `media queries`.
> - The output can be viewed by running the following command on terminal.
> - `npm run dev`
