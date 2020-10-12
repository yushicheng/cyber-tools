import dva from "dva";
import "@/globals/app.less";

export const app = dva({
	onError: (error) => (error)
});

app.model(require("@/pages/HomePage/index.model").default);

export function startApplication(renderCallback){
  app.router(renderCallback);
  app.start("#root");
};