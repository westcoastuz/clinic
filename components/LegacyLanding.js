"use client";

import { useEffect, useRef } from "react";

async function executeScriptsInOrder(container) {
  const scripts = Array.from(container.querySelectorAll("script"));

  for (const oldScript of scripts) {
    const newScript = document.createElement("script");

    for (const { name, value } of oldScript.attributes) {
      newScript.setAttribute(name, value);
    }

    const scriptText = oldScript.textContent;
    const hasSrc = newScript.hasAttribute("src");

    if (hasSrc && !newScript.hasAttribute("async")) {
      newScript.async = false;
    }

    const parent = oldScript.parentNode;
    if (!parent) continue;

    if (hasSrc) {
      await new Promise((resolve) => {
        newScript.onload = () => resolve();
        newScript.onerror = () => resolve();
        parent.replaceChild(newScript, oldScript);
      });
    } else {
      if (scriptText) {
        newScript.text = scriptText;
      }
      parent.replaceChild(newScript, oldScript);
    }
  }
}

export default function LegacyLanding({ styles, bodyHtml }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || wrapper.dataset.scriptsExecuted === "true") return;

    wrapper.dataset.scriptsExecuted = "true";
    executeScriptsInOrder(wrapper);
  }, [bodyHtml]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div
        ref={wrapperRef}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </>
  );
}
