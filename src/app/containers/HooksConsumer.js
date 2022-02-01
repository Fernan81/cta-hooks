import { createElement } from "react";
import { useApolloWithButtons } from "../hooks/use-apollo-with-buttons";
import { HooksConsumerUI } from "../components/HooksConsumerUI";

export const HooksConsumer = () =>
  createElement(HooksConsumerUI, useApolloWithButtons());
