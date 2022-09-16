declare namespace ThemeTypes {
  export type Themes = "dark" | "light";
  export type BtnText = "Let there be darkness" | "Let there be light";

  export interface ThemeConfig {
    theme: Themes;
    btnText: BtnText;
  }
}
