import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";

import apollo from "./apollo";
import github from "./github";
import app from "./app";
import styleguide from "./Styleguide";

const render = true ? app : styleguide;

runHookApp({
  settings: {
    apollo: {
      target: "marcopeg"
    }
  },
  services: [reactRoot, apollo, github],
  features: [render]
});
