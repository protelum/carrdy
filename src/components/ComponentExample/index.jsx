import ComponentExampleView from './index.view';
import ComponentExample from './index.data';
// The data component is exported as the default here
// But the view component is also exported in case
// just the view component can be reused somewhere else

// Also keep in mind that not all components need a data layer
// A title component that does not fetch data from anywhere
// should only have a view component
// Keep these kind of things in mind when building
export default ComponentExample;
export { ComponentExampleView };
