import SC from "./screen";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    component: SC.Home,
    name: "Home",
  },
  {
    path: "/api",
    component: SC.Api,
    name: "API",
  },
  {
    path: "/timer",
    component: SC.Timer,
    name: "Timer",
  },
  {
    path: "/binding",
    component: SC.BindingScreen,
    name: "Binding",
  },
  {
    path: "/todo",
    component: SC.Todo,
    name: "Todo",
  },
  {
    path: "/counter",
    component: SC.Counter,
    name: "Counter",
  },
  {
    path: "/styling",
    component: SC.Styling,
    name: "Styling",
  },
  {
    path: "/counter-fun",
    component: SC.CounterFunction,
    name: "Counter-fun",
  },
  {
    path: "/practice",
    component: SC.Practice,
    name: "Practice",
  },
  {
    path: "/redux",
    component: SC.Redux,
    name: "Redux",
  },
];
