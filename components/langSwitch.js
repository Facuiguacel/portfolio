import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/langswitch.module.css";

function LangSwitch() {
  const router = useRouter();
  const { asPath, locale } = router;

  const locales = [
    { value: "en", label: "english" },
    { value: "es", label: "español" },
  ];
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(locale);
  }, [locale]);

  const onLangChange = (lang) => {
    if (lang == locale) return;
    setSelected(lang);
    router.push(asPath, asPath, { locale: lang, scroll: false });
  };

  return (
    <div className={styles.switch}>
      {locales.map(({ value, label }) => (
        <div
          key={value}
          className={value == selected ? styles.localeSelected : styles.locale}
          onClick={() => onLangChange(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default LangSwitch;
