import { HooksConsumerUI } from "./app/components/HooksConsumerUI";

const Styleguide = () => (
  <div>
    <h2>Default:</h2>
    <HooksConsumerUI
      handleGet={() => () => {
        console.log("click", Date.now());
      }}
    />
    <hr />

    <h2>With a response:</h2>
    <HooksConsumerUI
      response={"Some kind of response"}
      handleGet={() => () => {
        console.log("click", Date.now());
      }}
    />
    <hr />

    <h2>While loading:</h2>
    <HooksConsumerUI
      loading
      handleGet={() => () => {
        console.log("click", Date.now());
      }}
    />
    <hr />

    <h2>With an error:</h2>
    <HooksConsumerUI
      error={new Error("ooops, something went wrong")}
      handleGet={() => () => {
        console.log("click", Date.now());
      }}
    />
    <hr />
  </div>
);

export default {
  hook: "$REACT_ROOT_COMPONENT",
  handler: { component: Styleguide }
};
