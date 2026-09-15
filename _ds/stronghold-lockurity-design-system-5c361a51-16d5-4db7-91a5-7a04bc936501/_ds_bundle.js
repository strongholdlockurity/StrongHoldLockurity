/* @ds-bundle: {"format":4,"namespace":"StrongholdLockurityDesignSystem_5c361a","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"PillTag","sourcePath":"components/buttons/PillTag.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CodeChip","sourcePath":"components/cards/CodeChip.jsx"},{"name":"CodeMockup","sourcePath":"components/cards/CodeMockup.jsx"},{"name":"AppShellRow","sourcePath":"components/examples/AppShellRow.jsx"},{"name":"AuthFormCard","sourcePath":"components/examples/AuthFormCard.jsx"},{"name":"DataTable","sourcePath":"components/examples/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/examples/EmptyState.jsx"},{"name":"IncludedSummary","sourcePath":"components/examples/IncludedSummary.jsx"},{"name":"ModalCard","sourcePath":"components/examples/ModalCard.jsx"},{"name":"PricingTier","sourcePath":"components/examples/PricingTier.jsx"},{"name":"SubscriptionSummary","sourcePath":"components/examples/SubscriptionSummary.jsx"},{"name":"Toast","sourcePath":"components/examples/Toast.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"ContentBand","sourcePath":"components/layout/ContentBand.jsx"},{"name":"DashedRule","sourcePath":"components/layout/DashedRule.jsx"},{"name":"Eyebrow","sourcePath":"components/layout/Eyebrow.jsx"},{"name":"GreenDividerBand","sourcePath":"components/layout/GreenDividerBand.jsx"},{"name":"HeroBand","sourcePath":"components/layout/HeroBand.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"0c2f95509bb1","components/buttons/PillTag.jsx":"35c7da550806","components/cards/Card.jsx":"75c4eef47fca","components/cards/CodeChip.jsx":"1429caba721b","components/cards/CodeMockup.jsx":"9c10ee58c523","components/examples/AppShellRow.jsx":"d654deeefe85","components/examples/AuthFormCard.jsx":"4bbfe82d6a2a","components/examples/DataTable.jsx":"145e27287b1c","components/examples/EmptyState.jsx":"8b81e9e84d45","components/examples/IncludedSummary.jsx":"86ab8949d9ad","components/examples/ModalCard.jsx":"81705824d053","components/examples/PricingTier.jsx":"eb9ae1b782f0","components/examples/SubscriptionSummary.jsx":"d3bdef71c39f","components/examples/Toast.jsx":"745b5ac7203b","components/forms/TextInput.jsx":"75333d2b613f","components/layout/ContentBand.jsx":"6a0cde54be29","components/layout/DashedRule.jsx":"6fa754e19b72","components/layout/Eyebrow.jsx":"b68e7ffbf997","components/layout/GreenDividerBand.jsx":"cfec263109a1","components/layout/HeroBand.jsx":"49ffeedbb871","components/navigation/Footer.jsx":"99278de91ae4","components/navigation/NavBar.jsx":"6ea63dbd0638","components/navigation/NavLink.jsx":"717049b4d5f7","ui_kits/console/ConsoleShell.jsx":"46ad4ce79f87","ui_kits/console/ConsoleViews.jsx":"0d8cde184e40","ui_kits/marketing/MarketingSite.jsx":"3730071e92fe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StrongholdLockurityDesignSystem_5c361a = window.StrongholdLockurityDesignSystem_5c361a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const slBtnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--sl-space-sm)",
  fontFamily: "var(--sl-font-sans)",
  fontSize: "var(--sl-button-md-size)",
  fontWeight: "var(--sl-button-md-weight)",
  lineHeight: "var(--sl-button-md-line)",
  letterSpacing: 0,
  padding: "var(--sl-space-md) var(--sl-space-lg)",
  borderRadius: "var(--sl-radius-sm)",
  border: "1px solid transparent",
  textDecoration: "none",
  cursor: "pointer",
  transition: "var(--sl-transition)",
  fontFeatureSettings: 'var(--sl-font-features)'
};
const slBtnVariants = {
  primary: {
    background: "var(--sl-primary)",
    color: "var(--sl-on-primary)",
    borderColor: "var(--sl-primary)"
  },
  outline: {
    background: "var(--sl-canvas)",
    color: "var(--sl-ink)",
    borderColor: "var(--sl-hairline)"
  },
  ghost: {
    background: "transparent",
    color: "var(--sl-primary-soft)",
    borderColor: "transparent",
    padding: "var(--sl-space-md) var(--sl-space-sm)"
  }
};

/** The brand's CTA. One accent, three variants: primary green, hairline outline, green ghost. */
function Button({
  variant = "primary",
  href,
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const composed = {
    ...slBtnBase,
    ...(slBtnVariants[variant] || slBtnVariants.primary),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: "not-allowed"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: composed
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/PillTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline status / category pill. The only place the brand uses a full 9999px radius. */
function PillTag({
  tone = "default",
  dot = false,
  children,
  style,
  ...rest
}) {
  const slPill = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--sl-space-sm)",
    background: "var(--sl-canvas)",
    color: tone === "live" ? "var(--sl-primary)" : "var(--sl-ink)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-pill)",
    padding: "var(--sl-space-xs) var(--sl-space-md)",
    fontFamily: "var(--sl-font-sans)",
    fontSize: "var(--sl-body-sm-size)",
    fontWeight: "var(--sl-body-sm-weight)",
    lineHeight: "var(--sl-body-sm-line)",
    whiteSpace: "nowrap",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: slPill
  }, rest), (dot || tone === "live") && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--sl-radius-full)",
      background: "var(--sl-primary)",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { PillTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/PillTag.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Default feature card: hairline border on canvas, 8px radius, 24px interior. No shadows. */
function Card({
  emphasized = false,
  featured = false,
  glow = false,
  padding,
  as = "div",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const borderWidth = featured ? "var(--sl-border-width-featured)" : emphasized ? "var(--sl-border-width-emphasized)" : "var(--sl-border-width)";
  const slCard = {
    background: "var(--sl-canvas)",
    color: "var(--sl-ink)",
    border: `${borderWidth} solid ${featured ? "var(--sl-primary)" : "var(--sl-hairline)"}`,
    borderRadius: "var(--sl-radius-md)",
    padding: padding || "var(--sl-card-padding)",
    boxShadow: glow ? "var(--sl-elev-2)" : "none",
    fontFamily: "var(--sl-font-sans)",
    transition: "var(--sl-transition)",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: slCard
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/CodeChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline command snippet chip — canvas-soft fill, mono 13px, 6px radius. */
function CodeChip({
  children,
  accent = false,
  style,
  ...rest
}) {
  const slChip = {
    display: "inline-block",
    background: "var(--sl-canvas-soft)",
    color: accent ? "var(--sl-primary)" : "var(--sl-canvas-text-soft)",
    fontFamily: "var(--sl-font-mono)",
    fontSize: "var(--sl-code-size)",
    lineHeight: "var(--sl-code-line)",
    padding: "var(--sl-space-xxs) var(--sl-space-sm)",
    borderRadius: "var(--sl-radius-sm)",
    ...style
  };
  return /*#__PURE__*/React.createElement("code", _extends({
    style: slChip
  }, rest), children);
}
Object.assign(__ds_scope, { CodeChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CodeChip.jsx", error: String((e && e.message) || e) }); }

// components/cards/CodeMockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark code-editor card with a copy-to-clipboard affordance. Mono 13px on canvas, hairline chrome. */
function CodeMockup({
  filename,
  code = "",
  lines,
  showCopy = true,
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const rows = lines || String(code).split("\n");
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(rows.join("\n")).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  const slMockup = {
    background: "var(--sl-canvas)",
    color: "var(--sl-ink)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-md)",
    overflow: "hidden",
    fontFamily: "var(--sl-font-mono)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: slMockup
  }, rest), (filename || showCopy) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--sl-space-lg)",
      padding: "var(--sl-space-md) var(--sl-space-xl)",
      borderBottom: "1px solid var(--sl-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      lineHeight: "var(--sl-code-line)",
      color: "var(--sl-mute)"
    }
  }, filename), showCopy && /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      background: "transparent",
      border: "1px solid var(--sl-hairline)",
      borderRadius: "var(--sl-radius-xs)",
      color: copied ? "var(--sl-primary)" : "var(--sl-mute)",
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      lineHeight: "var(--sl-code-line)",
      padding: "var(--sl-space-xxs) var(--sl-space-sm)",
      cursor: "pointer",
      transition: "var(--sl-transition)"
    }
  }, copied ? "copied" : "copy")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "var(--sl-code-padding)",
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      lineHeight: "var(--sl-code-line)",
      color: "var(--sl-canvas-text-soft)",
      whiteSpace: "pre",
      overflowX: "auto"
    }
  }, rows.join("\n")));
}
Object.assign(__ds_scope, { CodeMockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CodeMockup.jsx", error: String((e && e.message) || e) }); }

// components/examples/AppShellRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sidebar nav row for the app shell. Active state is a 2px green left indicator. */
function AppShellRow({
  icon,
  label,
  badge,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const slRow = {
    display: "flex",
    alignItems: "center",
    gap: "var(--sl-space-md)",
    width: "100%",
    background: active || hover ? "var(--sl-canvas-soft)" : "transparent",
    color: active ? "var(--sl-ink-strong)" : "var(--sl-body)",
    border: "none",
    borderLeft: `2px solid ${active ? "var(--sl-primary)" : "transparent"}`,
    borderRadius: "var(--sl-radius-sm)",
    padding: "var(--sl-space-sm) var(--sl-space-md)",
    fontFamily: "var(--sl-font-sans)",
    fontSize: "var(--sl-body-sm-size)",
    fontWeight: active ? "var(--sl-body-sm-strong-weight)" : "var(--sl-body-sm-weight)",
    lineHeight: "var(--sl-body-sm-line)",
    textAlign: "left",
    cursor: "pointer",
    transition: "var(--sl-transition)",
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: slRow,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none",
      color: active ? "var(--sl-primary)" : "var(--sl-mute)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)",
      color: "var(--sl-mute)"
    }
  }, badge));
}
Object.assign(__ds_scope, { AppShellRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/AppShellRow.jsx", error: String((e && e.message) || e) }); }

// components/examples/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Data table: mono-caps eyebrow header row, body-sm cells, hairline row borders. */
function DataTable({
  columns = [],
  rows = [],
  style,
  ...rest
}) {
  const slTable = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    ...style
  };
  const th = {
    textAlign: "left",
    background: "var(--sl-canvas-soft)",
    color: "var(--sl-mute)",
    textTransform: "uppercase",
    fontSize: "var(--sl-caption-strong-size)",
    fontWeight: "var(--sl-eyebrow-mono-weight)",
    lineHeight: "var(--sl-eyebrow-mono-line)",
    letterSpacing: "1.8px",
    padding: "var(--sl-space-md) var(--sl-space-lg)",
    borderBottom: "1px solid var(--sl-hairline)",
    whiteSpace: "nowrap"
  };
  const td = {
    padding: "var(--sl-space-md) var(--sl-space-lg)",
    borderBottom: "1px solid var(--sl-hairline)",
    fontSize: "var(--sl-body-sm-size)",
    lineHeight: "var(--sl-body-sm-line)",
    color: "var(--sl-body)"
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    style: slTable
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key || c,
    style: th
  }, c.label || c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, columns.map(c => {
    const key = c.key || c;
    const mono = c.mono;
    return /*#__PURE__*/React.createElement("td", {
      key: key,
      style: {
        ...td,
        ...(mono ? {
          fontFamily: "var(--sl-font-mono)",
          fontSize: "var(--sl-code-size)",
          lineHeight: "var(--sl-code-line)",
          color: "var(--sl-canvas-text-soft)"
        } : null),
        ...(c.align ? {
          textAlign: c.align
        } : null)
      }
    }, row[key]);
  })))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/examples/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Empty-state frame: dashed inner rule, mute caption, single ghost or primary action. */
function EmptyState({
  title,
  caption,
  action,
  glyph,
  style,
  ...rest
}) {
  const slEmpty = {
    background: "var(--sl-canvas)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-md)",
    padding: "var(--sl-space-4xl) var(--sl-space-2xl)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--sl-space-lg)",
    textAlign: "center",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: slEmpty
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--sl-radius-full)",
      border: "var(--sl-dashed-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--sl-mute)"
    }
  }, glyph), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-display-sm-size)",
      fontWeight: "var(--sl-display-sm-weight)",
      lineHeight: "var(--sl-display-sm-line)"
    }
  }, title), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: 360,
      color: "var(--sl-mute)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, caption), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/examples/IncludedSummary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "What's included" summary card — grouped label/value rows on a canvas-soft surface. */
function IncludedSummary({
  title = "What's included",
  groups = [],
  style,
  ...rest
}) {
  const slSummary = {
    background: "var(--sl-canvas-soft)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-md)",
    padding: "var(--sl-card-padding)",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--sl-space-xl)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: slSummary
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "uppercase",
      fontSize: "var(--sl-eyebrow-mono-size)",
      fontWeight: "var(--sl-eyebrow-mono-weight)",
      lineHeight: "var(--sl-eyebrow-mono-line)",
      letterSpacing: "var(--sl-eyebrow-mono-tracking)",
      color: "var(--sl-mute)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-lg)"
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-body-sm-strong-size)",
      fontWeight: "var(--sl-body-sm-strong-weight)",
      lineHeight: "var(--sl-body-sm-strong-line)"
    }
  }, g.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-body)",
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-body-sm-line)"
    }
  }, g.value)))));
}
Object.assign(__ds_scope, { IncludedSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/IncludedSummary.jsx", error: String((e && e.message) || e) }); }

// components/examples/ModalCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal dialog surface — feature-card chrome at Level 3 elevation (in-product only). */
function ModalCard({
  title,
  description,
  actions,
  onClose,
  children,
  style,
  ...rest
}) {
  const slModal = {
    background: "var(--sl-canvas)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-md)",
    boxShadow: "var(--sl-elev-3)",
    padding: "var(--sl-space-3xl)",
    width: "100%",
    maxWidth: 480,
    display: "flex",
    flexDirection: "column",
    gap: "var(--sl-space-xl)",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: slModal
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--sl-space-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-ink-strong)",
      fontSize: "var(--sl-display-md-size)",
      fontWeight: "var(--sl-display-md-weight)",
      lineHeight: "var(--sl-display-md-line)",
      letterSpacing: "var(--sl-display-md-tracking)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "transparent",
      border: "1px solid var(--sl-hairline)",
      borderRadius: "var(--sl-radius-xs)",
      color: "var(--sl-mute)",
      width: 26,
      height: 26,
      cursor: "pointer",
      lineHeight: 1,
      flex: "none"
    }
  }, "\xD7")), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--sl-body)",
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-prose-line)"
    }
  }, description), children, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sl-space-md)",
      justifyContent: "flex-end"
    }
  }, actions));
}
Object.assign(__ds_scope, { ModalCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/ModalCard.jsx", error: String((e && e.message) || e) }); }

// components/examples/PricingTier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pricing tier card. `featured` flips polarity: light fill, near-black text, green CTA. */
function PricingTier({
  name,
  price,
  period = "/mo",
  blurb,
  features = [],
  cta = "Start free",
  badge,
  featured = false,
  style,
  ...rest
}) {
  const fg = featured ? "var(--sl-canvas)" : "var(--sl-ink)";
  const slTier = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sl-space-xl)",
    background: featured ? "var(--sl-ink)" : "var(--sl-canvas-soft)",
    color: fg,
    border: `1px solid ${featured ? "var(--sl-ink)" : "var(--sl-hairline)"}`,
    borderRadius: "var(--sl-radius-md)",
    padding: "var(--sl-card-padding)",
    fontFamily: "var(--sl-font-sans)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: slTier
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-display-sm-size)",
      fontWeight: "var(--sl-display-sm-weight)",
      lineHeight: "var(--sl-display-sm-line)"
    }
  }, name), badge && (featured ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--sl-canvas)",
      color: "var(--sl-primary)",
      border: "1px solid var(--sl-canvas)",
      borderRadius: "var(--sl-radius-pill)",
      padding: "var(--sl-space-xs) var(--sl-space-md)",
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-body-sm-line)",
      whiteSpace: "nowrap"
    }
  }, badge) : /*#__PURE__*/React.createElement(__ds_scope.PillTag, null, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sl-space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-display-lg-size)",
      fontWeight: "var(--sl-code-weight)",
      lineHeight: "var(--sl-display-lg-line)",
      letterSpacing: "var(--sl-display-lg-tracking)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: featured ? "var(--sl-canvas)" : "var(--sl-mute)",
      opacity: featured ? 0.65 : 1,
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      lineHeight: "var(--sl-code-line)"
    }
  }, period)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: featured ? "var(--sl-canvas)" : "var(--sl-body)",
      opacity: featured ? 0.75 : 1,
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-body-sm-line)"
    }
  }, blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-md)"
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      gap: "var(--sl-space-md)",
      alignItems: "flex-start",
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-body-sm-line)",
      color: featured ? "var(--sl-canvas)" : "var(--sl-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: featured ? "var(--sl-primary-deep)" : "var(--sl-primary)",
      flex: "none"
    }
  }, "\u2014"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    style: {
      marginTop: "auto"
    }
  }, cta));
}
Object.assign(__ds_scope, { PricingTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/PricingTier.jsx", error: String((e && e.message) || e) }); }

// components/examples/SubscriptionSummary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Subscription summary drawer: add-on line items, hairline row dividers, mono totals. */
function SubscriptionSummary({
  title = "Subscription",
  items = [],
  total,
  note,
  style,
  ...rest
}) {
  const slDrawer = {
    background: "var(--sl-canvas)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-md)",
    padding: "var(--sl-card-padding)",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--sl-space-lg)",
    ...style
  };
  const money = {
    fontFamily: "var(--sl-font-mono)",
    fontSize: "var(--sl-code-size)",
    lineHeight: "var(--sl-code-line)"
  };
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: slDrawer
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-display-sm-size)",
      fontWeight: "var(--sl-display-sm-weight)",
      lineHeight: "var(--sl-display-sm-line)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--sl-space-lg)",
      padding: "var(--sl-space-md) 0",
      borderTop: i === 0 ? "none" : "1px solid var(--sl-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-body-sm-line)"
    }
  }, it.label), it.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-mute)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, it.meta)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...money,
      color: "var(--sl-ink)"
    }
  }, it.amount)))), total && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      paddingTop: "var(--sl-space-lg)",
      borderTop: "2px solid var(--sl-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-body-md-strong-size)",
      fontWeight: "var(--sl-body-md-strong-weight)",
      lineHeight: "var(--sl-body-md-strong-line)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...money,
      fontSize: "var(--sl-display-sm-size)",
      color: "var(--sl-ink-strong)"
    }
  }, total)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true
  }, "Update plan"), note && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-mute)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, note));
}
Object.assign(__ds_scope, { SubscriptionSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/SubscriptionSummary.jsx", error: String((e && e.message) || e) }); }

// components/examples/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toast notification — feature-card shape with the Level 2 glow and a green status rail. */
function Toast({
  title,
  message,
  tone = "success",
  onDismiss,
  style,
  ...rest
}) {
  const slToast = {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--sl-space-md)",
    background: "var(--sl-canvas-soft)",
    border: "1px solid var(--sl-hairline)",
    borderLeft: `2px solid ${tone === "success" ? "var(--sl-primary)" : "var(--sl-body)"}`,
    borderRadius: "var(--sl-radius-md)",
    boxShadow: "var(--sl-elev-2)",
    padding: "var(--sl-space-lg)",
    minWidth: 300,
    maxWidth: 420,
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: slToast
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-xs)",
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-body-sm-strong-size)",
      fontWeight: "var(--sl-body-sm-strong-weight)",
      lineHeight: "var(--sl-body-sm-strong-line)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-body)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "transparent",
      border: "none",
      color: "var(--sl-mute)",
      cursor: "pointer",
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Standard text input on dark: canvas-soft fill, hairline border, 6px radius. */
function TextInput({
  label,
  hint,
  id,
  type = "text",
  invalid = false,
  success = false,
  style,
  ...rest
}) {
  const inputId = id || `sl-input-${label ? label.replace(/\s+/g, "-").toLowerCase() : "field"}`;
  const slField = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sl-space-sm)",
    fontFamily: "var(--sl-font-sans)"
  };
  const slInput = {
    background: "var(--sl-canvas-soft)",
    color: "var(--sl-ink)",
    border: `1px solid ${success ? "var(--sl-primary)" : invalid ? "var(--sl-hairline-soft)" : "var(--sl-hairline)"}`,
    borderRadius: "var(--sl-radius-sm)",
    padding: "var(--sl-space-md) var(--sl-space-lg)",
    fontFamily: "var(--sl-font-sans)",
    fontSize: "var(--sl-body-sm-size)",
    lineHeight: "var(--sl-body-sm-line)",
    outline: "none",
    transition: "var(--sl-transition)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: slField
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--sl-body-sm-strong-size)",
      fontWeight: "var(--sl-body-sm-strong-weight)",
      lineHeight: "var(--sl-body-sm-strong-line)",
      color: "var(--sl-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    style: slInput
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)",
      color: success ? "var(--sl-primary)" : "var(--sl-mute)"
    }
  }, hint));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/examples/AuthFormCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sign-in / sign-up card — feature-card chrome wrapping text inputs and a green CTA. */
function AuthFormCard({
  title = "Sign in",
  subtitle,
  fields = [{
    label: "Email",
    type: "email",
    placeholder: "you@company.com"
  }, {
    label: "Password",
    type: "password",
    placeholder: "••••••••"
  }],
  cta = "Sign in",
  footer,
  style,
  ...rest
}) {
  const slAuth = {
    background: "var(--sl-canvas)",
    border: "1px solid var(--sl-hairline)",
    borderRadius: "var(--sl-radius-md)",
    padding: "var(--sl-space-3xl)",
    width: "100%",
    maxWidth: 380,
    display: "flex",
    flexDirection: "column",
    gap: "var(--sl-space-2xl)",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: slAuth
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-ink-strong)",
      fontSize: "var(--sl-display-md-size)",
      fontWeight: "var(--sl-display-md-weight)",
      lineHeight: "var(--sl-display-md-line)",
      letterSpacing: "var(--sl-display-md-tracking)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-body)",
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-body-sm-line)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-lg)"
    }
  }, fields.map(f => /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    key: f.label,
    label: f.label,
    type: f.type,
    placeholder: f.placeholder,
    hint: f.hint
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true
  }, cta), footer && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-mute)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, footer));
}
Object.assign(__ds_scope, { AuthFormCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/examples/AuthFormCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/DashedRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The quiet rhythm cue between section bands: 1px dashed rgba(79,93,117,0.4). */
function DashedRule({
  vertical = false,
  style,
  ...rest
}) {
  const slRule = vertical ? {
    borderLeft: "var(--sl-dashed-border)",
    alignSelf: "stretch",
    width: 0,
    ...style
  } : {
    borderTop: "var(--sl-dashed-border)",
    width: "100%",
    height: 0,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: slRule
  }, rest));
}
Object.assign(__ds_scope, { DashedRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DashedRule.jsx", error: String((e && e.message) || e) }); }

// components/layout/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** UPPERCASE tracked label above headlines — Inter 600, 2.52px tracking at 14px. */
function Eyebrow({
  size = "mono",
  children,
  style,
  ...rest
}) {
  const slEyebrow = {
    display: "block",
    textTransform: "uppercase",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-mute)",
    fontSize: size === "large" ? "var(--sl-eyebrow-uppercase-size)" : "var(--sl-eyebrow-mono-size)",
    fontWeight: size === "large" ? "var(--sl-eyebrow-uppercase-weight)" : "var(--sl-eyebrow-mono-weight)",
    lineHeight: size === "large" ? "var(--sl-eyebrow-uppercase-line)" : "var(--sl-eyebrow-mono-line)",
    letterSpacing: size === "large" ? "var(--sl-eyebrow-uppercase-tracking)" : "var(--sl-eyebrow-mono-tracking)",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: slEyebrow
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/layout/ContentBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Standard content band: eyebrow + 36px section headline + children (usually a feature grid). */
function ContentBand({
  eyebrow,
  headline,
  lead,
  align = "left",
  children,
  style,
  ...rest
}) {
  const slBand = {
    background: "var(--sl-canvas)",
    color: "var(--sl-ink)",
    padding: "var(--sl-space-5xl) var(--sl-space-3xl)",
    fontFamily: "var(--sl-font-sans)",
    ...style
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: slBand
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--sl-container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-4xl)"
    }
  }, (eyebrow || headline || lead) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-lg)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left"
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), headline && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: "var(--sl-ink-strong)",
      fontSize: "var(--sl-display-lg-size)",
      fontWeight: "var(--sl-display-lg-weight)",
      lineHeight: "var(--sl-display-lg-line)",
      letterSpacing: "var(--sl-display-lg-tracking)",
      textWrap: "pretty"
    }
  }, headline), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      color: "var(--sl-body)",
      fontSize: "var(--sl-body-md-size)",
      lineHeight: "var(--sl-prose-line)",
      textWrap: "pretty"
    }
  }, lead)), children));
}
Object.assign(__ds_scope, { ContentBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ContentBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/GreenDividerBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The brand's only chromatic divider: a thin band with 2px green top/bottom borders. */
function GreenDividerBand({
  children,
  style,
  ...rest
}) {
  const slDivider = {
    background: "var(--sl-canvas)",
    borderTop: "2px solid var(--sl-primary)",
    borderBottom: "2px solid var(--sl-primary)",
    padding: children ? "var(--sl-space-2xl) var(--sl-space-3xl)" : "var(--sl-space-sm) 0",
    fontFamily: "var(--sl-font-sans)",
    color: "var(--sl-ink)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: slDivider
  }, rest), children && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--sl-container-max)",
      margin: "0 auto"
    }
  }, children));
}
Object.assign(__ds_scope, { GreenDividerBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GreenDividerBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark hero band: tracked eyebrow, 60px Inter 400 headline, lead paragraph, CTA row. */
function HeroBand({
  eyebrow,
  headline,
  lead,
  actions,
  aside,
  note,
  style,
  ...rest
}) {
  const slHero = {
    background: "var(--sl-canvas)",
    color: "var(--sl-ink)",
    padding: "var(--sl-space-5xl) var(--sl-space-3xl)",
    fontFamily: "var(--sl-font-sans)",
    fontFeatureSettings: "var(--sl-font-features)",
    ...style
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: slHero
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--sl-container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: aside ? "minmax(0, 1fr) minmax(0, 1fr)" : "minmax(0, 1fr)",
      gap: "var(--sl-space-6xl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-2xl)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "var(--sl-ink-strong)",
      fontSize: "var(--sl-display-xl-size)",
      fontWeight: "var(--sl-display-xl-weight)",
      lineHeight: "var(--sl-display-xl-line)",
      letterSpacing: "var(--sl-display-xl-tracking)",
      textWrap: "pretty"
    }
  }, headline), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      color: "var(--sl-body)",
      fontSize: "var(--sl-body-lg-size)",
      fontWeight: "var(--sl-body-lg-weight)",
      lineHeight: "var(--sl-body-lg-line)",
      textWrap: "pretty"
    }
  }, lead), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sl-space-md)",
      alignItems: "center"
    }
  }, actions), note && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-mute)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, note)), aside));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark footer band: column groups, hairline top edge, 14px body grey. */
function Footer({
  brand = "Stronghold Lockurity",
  tagline,
  columns = [],
  legal,
  style,
  ...rest
}) {
  const slFooter = {
    background: "var(--sl-canvas)",
    color: "var(--sl-body)",
    padding: "var(--sl-space-4xl) var(--sl-space-3xl)",
    borderTop: "1px solid var(--sl-hairline)",
    fontFamily: "var(--sl-font-sans)",
    fontSize: "var(--sl-body-sm-size)",
    lineHeight: "var(--sl-body-sm-line)",
    ...style
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: slFooter
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--sl-container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) repeat(auto-fit, minmax(140px, 1fr))",
      gap: "var(--sl-space-4xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-ink-strong)",
      fontSize: "var(--sl-body-md-strong-size)",
      fontWeight: "var(--sl-body-md-strong-weight)"
    }
  }, brand), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-mute)",
      maxWidth: 280
    }
  }, tagline)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sl-ink)",
      fontSize: "var(--sl-body-sm-strong-size)",
      fontWeight: "var(--sl-body-sm-strong-weight)"
    }
  }, col.title), col.items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      color: "var(--sl-body)",
      textDecoration: "none"
    }
  }, item))))), legal && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--sl-container-max)",
      margin: "var(--sl-space-4xl) auto 0",
      paddingTop: "var(--sl-space-2xl)",
      borderTop: "var(--sl-dashed-border)",
      color: "var(--sl-mute)",
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)"
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sticky top nav on dark: wordmark left, links centre, CTA right. Hairline bottom edge. */
function NavBar({
  brand = "Stronghold Lockurity",
  links,
  actions,
  sticky = true,
  style,
  ...rest
}) {
  const slNav = {
    display: "flex",
    alignItems: "center",
    gap: "var(--sl-space-3xl)",
    background: "var(--sl-canvas)",
    color: "var(--sl-ink)",
    padding: "var(--sl-space-md) var(--sl-space-3xl)",
    borderBottom: "1px solid var(--sl-hairline)",
    position: sticky ? "sticky" : "static",
    top: 0,
    zIndex: 20,
    fontFamily: "var(--sl-font-sans)",
    ...style
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: slNav
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sl-space-sm)",
      fontSize: "var(--sl-body-md-strong-size)",
      fontWeight: "var(--sl-body-md-strong-weight)",
      lineHeight: "var(--sl-body-md-strong-line)",
      color: "var(--sl-ink-strong)",
      whiteSpace: "nowrap"
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sl-space-2xl)",
      flex: 1
    }
  }, links), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sl-space-md)"
    }
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nav link item — body grey, 14px, green on hover. */
function NavLink({
  href = "#",
  active = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const slNavLink = {
    color: active || hover ? "var(--sl-ink)" : "var(--sl-body)",
    fontFamily: "var(--sl-font-sans)",
    fontSize: "var(--sl-body-sm-size)",
    fontWeight: active ? "var(--sl-body-sm-strong-weight)" : "var(--sl-body-sm-weight)",
    lineHeight: "var(--sl-body-sm-line)",
    textDecoration: "none",
    transition: "var(--sl-transition)",
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: slNavLink,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleShell.jsx
try { (() => {
const {
  AppShellRow,
  PillTag,
  Button,
  DataTable,
  EmptyState,
  ModalCard,
  Toast,
  Card,
  CodeMockup,
  CodeChip,
  TextInput,
  SubscriptionSummary,
  AuthFormCard,
  Eyebrow,
  DashedRule
} = window.StrongholdLockurityDesignSystem_5c361a;

/** Lucide icon wrapper — the icon set is a documented substitution (see readme.md ICONOGRAPHY). */
function Icon({
  name,
  size = 16,
  color = "currentColor"
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          "stroke-width": 1.75
        },
        nameAttr: "data-lucide"
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size
    }
  });
}
const consoleNav = [{
  key: "overview",
  label: "Overview",
  icon: "layout-dashboard"
}, {
  key: "agents",
  label: "Agents",
  icon: "bot",
  badge: "6"
}, {
  key: "traces",
  label: "Traces",
  icon: "activity",
  badge: "12"
}, {
  key: "evals",
  label: "Evals",
  icon: "flask-conical"
}, {
  key: "keys",
  label: "API keys",
  icon: "key-round"
}, {
  key: "billing",
  label: "Billing",
  icon: "credit-card"
}];
function ConsoleTopBar({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--sl-space-2xl)",
      padding: "var(--sl-space-md) var(--sl-space-3xl)",
      borderBottom: "1px solid var(--sl-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-display-sm-size)",
      fontWeight: "var(--sl-display-sm-weight)",
      lineHeight: "var(--sl-display-sm-line)",
      color: "var(--sl-ink-strong)"
    }
  }, title), /*#__PURE__*/React.createElement(PillTag, {
    tone: "live"
  }, "eu-west")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement(CodeChip, null, "proj_9f2c41"), action));
}
function ConsoleSidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flex: "none",
      borderRight: "1px solid var(--sl-hairline)",
      padding: "var(--sl-space-xl) var(--sl-space-md)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sl-space-sm)",
      padding: "0 var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-body-md-strong-size)",
      fontWeight: "var(--sl-body-md-strong-weight)",
      lineHeight: "var(--sl-body-md-strong-line)",
      color: "var(--sl-ink-strong)"
    }
  }, "Stronghold")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-xxs)"
    }
  }, consoleNav.map(n => /*#__PURE__*/React.createElement(AppShellRow, {
    key: n.key,
    label: n.label,
    badge: n.badge,
    active: view === n.key,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: n.icon
    }),
    onClick: () => setView(n.key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-md)",
      padding: "0 var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement(DashedRule, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-caption-size)",
      lineHeight: "var(--sl-caption-line)",
      color: "var(--sl-mute)"
    }
  }, "CLI 2.4.1 \xB7 docs")));
}
Object.assign(window, {
  Icon,
  ConsoleTopBar,
  ConsoleSidebar,
  consoleNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleViews.jsx
try { (() => {
const {
  AppShellRow,
  PillTag,
  Button,
  DataTable,
  EmptyState,
  ModalCard,
  Toast,
  Card,
  CodeMockup,
  CodeChip,
  TextInput,
  SubscriptionSummary,
  AuthFormCard,
  Eyebrow,
  DashedRule,
  IncludedSummary
} = window.StrongholdLockurityDesignSystem_5c361a;
const pad = {
  padding: "var(--sl-space-3xl)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--sl-space-2xl)"
};
const metricValue = {
  fontFamily: "var(--sl-font-mono)",
  fontSize: "var(--sl-display-lg-size)",
  lineHeight: "var(--sl-display-lg-line)",
  letterSpacing: "var(--sl-display-lg-tracking)",
  color: "var(--sl-ink-strong)"
};
function OverviewView() {
  const metrics = [{
    label: "Runs today",
    value: "17,266"
  }, {
    label: "p95 latency",
    value: "412ms"
  }, {
    label: "Error rate",
    value: "0.42%"
  }, {
    label: "Spend / mo",
    value: "$610"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: pad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "var(--sl-space-lg)"
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-sm)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: "var(--sl-caption-strong-size)",
      letterSpacing: "1.8px"
    }
  }, m.label), /*#__PURE__*/React.createElement("span", {
    style: metricValue
  }, m.value))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
      gap: "var(--sl-space-2xl)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sl-space-lg) var(--sl-space-lg) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Recent runs")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sl-space-lg)"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "id",
      label: "Run",
      mono: true
    }, {
      key: "agent",
      label: "Agent"
    }, {
      key: "latency",
      label: "Latency",
      mono: true,
      align: "right"
    }, {
      key: "status",
      label: "Status"
    }],
    rows: [{
      id: "run_8c21",
      agent: "support-router",
      latency: "402ms",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Ok")
    }, {
      id: "run_8c20",
      agent: "support-router",
      latency: "511ms",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Ok")
    }, {
      id: "run_8c1f",
      agent: "invoice-parser",
      latency: "1.2s",
      status: /*#__PURE__*/React.createElement(PillTag, null, "Retried")
    }, {
      id: "run_8c1e",
      agent: "onboarding-bot",
      latency: "640ms",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Ok")
    }]
  }))), /*#__PURE__*/React.createElement(IncludedSummary, {
    title: "This project",
    groups: [{
      label: "Plan",
      value: "Team — 5 seats"
    }, {
      label: "Trace retention",
      value: "90 days"
    }, {
      label: "Region",
      value: "eu-west (Frankfurt)"
    }, {
      label: "Sink",
      value: "stronghold managed"
    }]
  })));
}
function AgentsView({
  onOpenModal
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: pad
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "agent",
      label: "Agent"
    }, {
      key: "model",
      label: "Model",
      mono: true
    }, {
      key: "runs",
      label: "Runs 24h",
      mono: true,
      align: "right"
    }, {
      key: "p95",
      label: "p95",
      mono: true,
      align: "right"
    }, {
      key: "status",
      label: "Status"
    }],
    rows: [{
      agent: "support-router",
      model: "claude-sonnet-4",
      runs: "12,480",
      p95: "412ms",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Live")
    }, {
      agent: "invoice-parser",
      model: "claude-sonnet-4",
      runs: "3,902",
      p95: "1.2s",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Live")
    }, {
      agent: "onboarding-bot",
      model: "claude-haiku-4",
      runs: "884",
      p95: "640ms",
      status: /*#__PURE__*/React.createElement(PillTag, null, "Paused")
    }, {
      agent: "csat-summariser",
      model: "claude-haiku-4",
      runs: "0",
      p95: "—",
      status: /*#__PURE__*/React.createElement(PillTag, null, "Draft")
    }]
  }), /*#__PURE__*/React.createElement(DashedRule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: "var(--sl-space-2xl)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(CodeMockup, {
    filename: "support-router/agent.ts",
    code: `export const support = new Agent({
  name: 'support-router',
  model: 'claude-sonnet-4',
  memory: postgres(process.env.DATABASE_URL),
  tools: [lookupOrder, escalate, refund],
});`
  }), /*#__PURE__*/React.createElement(EmptyState, {
    title: "No draft agents deployed",
    caption: "csat-summariser has never been deployed. Run stronghold deploy to promote it into eu-west.",
    glyph: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--sl-font-mono)",
        fontSize: 13
      }
    }, "0"),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onOpenModal
    }, "Deploy draft")
  })));
}
const spans = [{
  name: "support-router",
  kind: "agent",
  ms: 412,
  depth: 0
}, {
  name: "plan",
  kind: "llm",
  ms: 188,
  depth: 1
}, {
  name: "lookup_order",
  kind: "tool",
  ms: 96,
  depth: 1
}, {
  name: "postgres.query",
  kind: "db",
  ms: 41,
  depth: 2
}, {
  name: "respond",
  kind: "llm",
  ms: 128,
  depth: 1
}];
function TracesView() {
  const [selected, setSelected] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
      gap: "var(--sl-space-2xl)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sl-space-lg)",
      borderBottom: "1px solid var(--sl-hairline)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "run_8c21 \xB7 span tree"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      color: "var(--sl-mute)"
    }
  }, "412ms total")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, spans.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.name,
    onClick: () => setSelected(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sl-space-md)",
      background: selected === i ? "var(--sl-canvas-soft)" : "transparent",
      border: "none",
      borderLeft: `2px solid ${selected === i ? "var(--sl-primary)" : "transparent"}`,
      borderBottom: "1px solid var(--sl-hairline)",
      padding: "var(--sl-space-md) var(--sl-space-lg)",
      paddingLeft: `calc(var(--sl-space-lg) + ${s.depth * 20}px)`,
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      color: "var(--sl-canvas-text-soft)",
      flex: 1
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-caption-size)",
      color: "var(--sl-mute)",
      width: 44
    }
  }, s.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      height: 6,
      background: "var(--sl-canvas-soft)",
      borderRadius: 2,
      overflow: "hidden",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: `${s.ms / 412 * 100}%`,
      background: "var(--sl-primary)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      color: "var(--sl-ink)",
      width: 56,
      textAlign: "right"
    }
  }, s.ms, "ms"))))), /*#__PURE__*/React.createElement(CodeMockup, {
    filename: `${spans[selected].name}.json`,
    code: `{
  "span": "${spans[selected].name}",
  "kind": "${spans[selected].kind}",
  "duration_ms": ${spans[selected].ms},
  "attributes": {
    "project": "proj_9f2c41",
    "region": "eu-west"
  }
}`
  }));
}
function KeysView({
  onRotate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: pad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: "var(--sl-space-2xl)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Live key"), /*#__PURE__*/React.createElement(TextInput, {
    label: "Secret",
    defaultValue: "sk_live_9f2c41b7a8e4",
    success: true,
    hint: "Last used 4 minutes ago"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onRotate
  }, "Rotate key"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "View audit log")))), /*#__PURE__*/React.createElement(CodeMockup, {
    filename: ".env",
    code: `STRONGHOLD_PROJECT=proj_9f2c41
STRONGHOLD_KEY=sk_live_9f2c41b7a8e4
STRONGHOLD_SINK=managed`
  })));
}
function BillingView() {
  return /*#__PURE__*/React.createElement("div", {
    style: pad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
      gap: "var(--sl-space-2xl)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sl-space-lg)",
      borderBottom: "1px solid var(--sl-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Usage this period")), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "item",
      label: "Item"
    }, {
      key: "included",
      label: "Included",
      mono: true,
      align: "right"
    }, {
      key: "used",
      label: "Used",
      mono: true,
      align: "right"
    }, {
      key: "overage",
      label: "Overage",
      mono: true,
      align: "right"
    }],
    rows: [{
      item: "Trace spans",
      included: "5,000,000",
      used: "6,940,112",
      overage: "$80.00"
    }, {
      item: "Seats",
      included: "20",
      used: "5",
      overage: "$0.00"
    }, {
      item: "Dedicated region",
      included: "—",
      used: "1",
      overage: "$35.00"
    }]
  })), /*#__PURE__*/React.createElement(SubscriptionSummary, {
    items: [{
      label: "Team plan",
      meta: "5 seats",
      amount: "$495.00"
    }, {
      label: "Extra traces",
      meta: "2M spans",
      amount: "$80.00"
    }, {
      label: "Dedicated region",
      meta: "eu-west",
      amount: "$35.00"
    }],
    total: "$610.00",
    note: "Billed monthly on the 1st. Cancel any time."
  })));
}
function EvalsView() {
  return /*#__PURE__*/React.createElement("div", {
    style: pad
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "suite",
      label: "Suite"
    }, {
      key: "cases",
      label: "Cases",
      mono: true,
      align: "right"
    }, {
      key: "pass",
      label: "Pass",
      mono: true,
      align: "right"
    }, {
      key: "drift",
      label: "Drift",
      mono: true,
      align: "right"
    }, {
      key: "status",
      label: "Status"
    }],
    rows: [{
      suite: "refund-policy",
      cases: "48",
      pass: "48",
      drift: "0.0%",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Green")
    }, {
      suite: "tone-of-voice",
      cases: "120",
      pass: "116",
      drift: "3.3%",
      status: /*#__PURE__*/React.createElement(PillTag, null, "Watch")
    }, {
      suite: "tool-selection",
      cases: "64",
      pass: "64",
      drift: "0.0%",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Green")
    }]
  }), /*#__PURE__*/React.createElement(CodeMockup, {
    filename: "terminal",
    code: `$ stronghold eval --suite tone-of-voice

  116/120 passed   drift 3.3%   14.2s
  4 cases below threshold — see traces run_8c0a..run_8c0d`
  }));
}
function SignInView({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--sl-space-5xl)",
      background: "var(--sl-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-2xl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-display-md-size)",
      fontWeight: "var(--sl-display-md-weight)",
      letterSpacing: "var(--sl-display-md-tracking)",
      color: "var(--sl-ink-strong)"
    }
  }, "Stronghold Lockurity"), /*#__PURE__*/React.createElement("div", {
    onClick: onSignIn,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(AuthFormCard, {
    subtitle: "Use your work account to reach the console.",
    footer: "SSO is available on Team plans."
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-caption-size)",
      color: "var(--sl-mute)"
    }
  }, "Prototype \u2014 any credentials sign you in.")));
}
function ConsoleApp() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [view, setView] = React.useState("overview");
  const [modal, setModal] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const fire = (t, m) => {
    setToast({
      title: t,
      message: m
    });
    setTimeout(() => setToast(null), 3200);
  };
  if (!signedIn) return /*#__PURE__*/React.createElement(SignInView, {
    onSignIn: () => setSignedIn(true)
  });
  const titles = {
    overview: "Overview",
    agents: "Agents",
    traces: "Traces",
    evals: "Evals",
    keys: "API keys",
    billing: "Billing"
  };
  const views = {
    overview: /*#__PURE__*/React.createElement(OverviewView, null),
    agents: /*#__PURE__*/React.createElement(AgentsView, {
      onOpenModal: () => setModal("deploy")
    }),
    traces: /*#__PURE__*/React.createElement(TracesView, null),
    evals: /*#__PURE__*/React.createElement(EvalsView, null),
    keys: /*#__PURE__*/React.createElement(KeysView, {
      onRotate: () => setModal("rotate")
    }),
    billing: /*#__PURE__*/React.createElement(BillingView, null)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--sl-canvas)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ConsoleSidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(ConsoleTopBar, {
    title: titles[view],
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => fire("Deploy queued", "support-router is rolling out to eu-west.")
    }, "Deploy")
  }), views[view]), modal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--sl-space-3xl)",
      zIndex: 40
    },
    onClick: () => setModal(null)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, modal === "rotate" ? /*#__PURE__*/React.createElement(ModalCard, {
    title: "Rotate API key",
    description: "The current key stops working immediately. Update your environment before rotating.",
    onClose: () => setModal(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setModal(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setModal(null);
        fire("Key rotated", "Paste the new key into your .env file.");
      }
    }, "Rotate key"))
  }, /*#__PURE__*/React.createElement(CodeChip, null, "sk_live_9f2c41b7a8e4")) : /*#__PURE__*/React.createElement(ModalCard, {
    title: "Deploy csat-summariser",
    description: "This promotes the draft agent into eu-west. Traces start flowing as soon as the first run lands.",
    onClose: () => setModal(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setModal(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setModal(null);
        fire("Deploy queued", "csat-summariser is building.");
      }
    }, "Deploy"))
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--sl-space-3xl)",
      bottom: "var(--sl-space-3xl)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: toast.title,
    message: toast.message,
    onDismiss: () => setToast(null)
  })));
}
Object.assign(window, {
  OverviewView,
  AgentsView,
  TracesView,
  EvalsView,
  KeysView,
  BillingView,
  SignInView,
  ConsoleApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleViews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingSite.jsx
try { (() => {
const {
  NavBar,
  NavLink,
  Button,
  PillTag,
  HeroBand,
  ContentBand,
  GreenDividerBand,
  DashedRule,
  Card,
  CodeMockup,
  CodeChip,
  Eyebrow,
  PricingTier,
  IncludedSummary,
  Footer,
  DataTable
} = window.StrongholdLockurityDesignSystem_5c361a;
const marketingNavLinks = ["Product", "Docs", "Pricing", "Changelog"];
function MarketingNav({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement("span", null, "Stronghold Lockurity"),
    links: marketingNavLinks.map(l => /*#__PURE__*/React.createElement(NavLink, {
      key: l,
      href: "#",
      active: l.toLowerCase() === view,
      onClick: e => {
        e.preventDefault();
        setView(l.toLowerCase() === "pricing" ? "pricing" : "product");
      }
    }, l)),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavLink, {
      href: "#"
    }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Start free"))
  });
}
const heroSource = `import { Agent, tool } from '@stronghold/core';

const lookupOrder = tool({
  name: 'lookup_order',
  input: { orderId: 'string' },
  run: async ({ orderId }) => db.orders.find(orderId),
});

export const support = new Agent({
  name: 'support-router',
  model: 'claude-sonnet-4',
  tools: [lookupOrder],
});`;
function MarketingHero() {
  return /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: "Agent engineering platform",
    headline: "Build, observe and ship AI agents",
    lead: "Typed primitives for tools and memory, local-first tracing, and one command to deploy. Written for the people who keep agents running in production.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Start free"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Read the docs"), /*#__PURE__*/React.createElement(CodeChip, {
      accent: true
    }, "npx stronghold init")),
    note: "No credit card. Self-host or run on our infrastructure.",
    aside: /*#__PURE__*/React.createElement(CodeMockup, {
      filename: "agent.ts",
      code: heroSource
    })
  });
}
const features = [{
  title: "Typed tools",
  body: "Declare tools once in TypeScript and get schema validation on every call, at author time and at run time."
}, {
  title: "Local-first tracing",
  body: "Every run writes a span tree you can open on localhost before anything ships."
}, {
  title: "Evals in CI",
  body: "Pin known-good transcripts and fail the build when a prompt change regresses them."
}, {
  title: "Memory adapters",
  body: "Swap Postgres, Redis or an in-memory store behind one interface."
}, {
  title: "One-command deploys",
  body: "The same project runs locally and in a managed region with no config rewrite."
}, {
  title: "Observability hooks",
  body: "Stream spans to your own collector; OTLP in, OTLP out."
}];
function FeatureGrid() {
  const [active, setActive] = React.useState(1);
  return /*#__PURE__*/React.createElement(ContentBand, {
    eyebrow: "Everything you need",
    headline: "One toolkit, end to end",
    lead: "The primitives, the traces and the deploy path in a single project. Nothing to wire together."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "var(--sl-space-2xl)"
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    featured: i === active,
    glow: i === active,
    onClick: () => setActive(i),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sl-display-sm-size)",
      fontWeight: "var(--sl-display-sm-weight)",
      lineHeight: "var(--sl-display-sm-line)",
      color: "var(--sl-ink-strong)"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--sl-body-sm-size)",
      lineHeight: "var(--sl-prose-line)",
      color: "var(--sl-body)"
    }
  }, f.body))))));
}
const runtimeSource = `$ stronghold deploy --region eu-west

  building   support-router      ok   1.8s
  bundling   3 tools, 1 memory   ok   0.4s
  uploading  4.1 MB              ok   2.2s

  live  https://support-router.stronghold.run`;
function RuntimeSection() {
  return /*#__PURE__*/React.createElement(ContentBand, {
    eyebrow: "From localhost to production",
    headline: "The deploy is the boring part"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: "var(--sl-space-6xl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-xl)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--sl-body-md-size)",
      lineHeight: "var(--sl-prose-line)",
      color: "var(--sl-body)"
    }
  }, "Agents run in a managed region or on your own cluster. The trace format, the tool contracts and the eval suite are identical in both."), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "region",
      label: "Region"
    }, {
      key: "p95",
      label: "p95",
      mono: true,
      align: "right"
    }, {
      key: "status",
      label: "Status"
    }],
    rows: [{
      region: "eu-west",
      p95: "412ms",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Live")
    }, {
      region: "us-east",
      p95: "388ms",
      status: /*#__PURE__*/React.createElement(PillTag, {
        tone: "live"
      }, "Live")
    }, {
      region: "ap-south",
      p95: "—",
      status: /*#__PURE__*/React.createElement(PillTag, null, "Beta")
    }]
  })), /*#__PURE__*/React.createElement(CodeMockup, {
    filename: "terminal",
    code: runtimeSource
  })));
}
function PricingSection() {
  return /*#__PURE__*/React.createElement(ContentBand, {
    eyebrow: "Pricing",
    headline: "Start free, pay when you ship",
    align: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "var(--sl-space-2xl)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(PricingTier, {
    name: "Solo",
    price: "$0",
    blurb: "For local experiments and side projects.",
    features: ["1 project", "7-day trace retention", "Community support"],
    cta: "Start free"
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Team",
    price: "$99",
    badge: "Popular",
    featured: true,
    blurb: "For teams running agents in production.",
    features: ["Unlimited projects", "90-day trace retention", "Evals in CI", "SSO"],
    cta: "Start trial"
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Scale",
    price: "Custom",
    period: "",
    blurb: "For platform teams with their own region.",
    features: ["Dedicated region", "Audit log", "Support SLA"],
    cta: "Talk to us"
  })), /*#__PURE__*/React.createElement(DashedRule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
      gap: "var(--sl-space-4xl)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(IncludedSummary, {
    groups: [{
      label: "Traces",
      value: "5M spans / month on Team"
    }, {
      label: "Seats",
      value: "Up to 20, then $12 each"
    }, {
      label: "Support",
      value: "Shared Slack channel"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sl-space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Questions we get"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--sl-body-md-size)",
      lineHeight: "var(--sl-prose-line)",
      color: "var(--sl-body)"
    }
  }, "Self-hosting is available on every plan. Traces stay in your own object storage if you point ", /*#__PURE__*/React.createElement(CodeChip, null, "STRONGHOLD_SINK"), " at it, and the CLI works offline against a local sink."))));
}
function MarketingFooter() {
  return /*#__PURE__*/React.createElement(Footer, {
    tagline: "Agent engineering for teams that ship.",
    columns: [{
      title: "Product",
      items: ["Overview", "Docs", "Pricing", "Changelog"]
    }, {
      title: "Developers",
      items: ["CLI", "SDK reference", "Status"]
    }, {
      title: "Company",
      items: ["About", "Careers", "Contact"]
    }],
    legal: "\xA9 2026 Stronghold Lockurity. All rights reserved."
  });
}
function MarketingSite() {
  const [view, setView] = React.useState("product");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sl-canvas)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(MarketingNav, {
    view: view,
    setView: setView
  }), view === "product" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MarketingHero, null), /*#__PURE__*/React.createElement(GreenDividerBand, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sl-space-2xl)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Trusted by engineering teams"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sl-space-4xl)",
      fontFamily: "var(--sl-font-mono)",
      fontSize: "var(--sl-code-size)",
      color: "var(--sl-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "4.2M traces / day"), /*#__PURE__*/React.createElement("span", null, "1,900 projects"), /*#__PURE__*/React.createElement("span", null, "99.98% uptime")))), /*#__PURE__*/React.createElement(FeatureGrid, null), /*#__PURE__*/React.createElement(DashedRule, null), /*#__PURE__*/React.createElement(RuntimeSection, null)) : /*#__PURE__*/React.createElement(PricingSection, null), /*#__PURE__*/React.createElement(MarketingFooter, null));
}
Object.assign(window, {
  MarketingNav,
  MarketingHero,
  FeatureGrid,
  RuntimeSection,
  PricingSection,
  MarketingFooter,
  MarketingSite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingSite.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PillTag = __ds_scope.PillTag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeChip = __ds_scope.CodeChip;

__ds_ns.CodeMockup = __ds_scope.CodeMockup;

__ds_ns.AppShellRow = __ds_scope.AppShellRow;

__ds_ns.AuthFormCard = __ds_scope.AuthFormCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.IncludedSummary = __ds_scope.IncludedSummary;

__ds_ns.ModalCard = __ds_scope.ModalCard;

__ds_ns.PricingTier = __ds_scope.PricingTier;

__ds_ns.SubscriptionSummary = __ds_scope.SubscriptionSummary;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.ContentBand = __ds_scope.ContentBand;

__ds_ns.DashedRule = __ds_scope.DashedRule;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GreenDividerBand = __ds_scope.GreenDividerBand;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NavLink = __ds_scope.NavLink;

})();
