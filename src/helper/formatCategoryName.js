// Helper function to format category name
export const formatCategoryName = (category) => {
  if (!category) return "";
  const s = category.toString();
  const lower = s.toLowerCase();

  // Detect parent category prefix
  let parent = null;
  let rest = "";

  if (lower.startsWith("stitched")) {
    parent = "Stitched";
    rest = lower.replace(/^stitched/, "");
  } else if (lower.startsWith("unstitched")) {
    parent = "Unstitched";
    rest = lower.replace(/^unstitched/, "");
  } else if (
    lower.startsWith("readytowear") ||
    lower.startsWith("ready-to-wear")
  ) {
    parent = "Ready To Wear";
    rest = lower.replace(/^readytowear|-ready-to-wear/gi, "");
  } else if (lower.startsWith("chantelle")) {
    parent = "Chantelle";
    rest = lower.replace(/^chantelle/, "");
  } else if (lower.startsWith("essentials")) {
    parent = "Essentials";
    rest = lower.replace(/^essentials/, "");
  } else {
    // fallback: try to split words from camelCase or dashes
    const withSpaces = s.replace(/([A-Z])/g, " $1").replace(/[-_]/g, " ");
    return withSpaces.replace(/^./, (c) => c.toUpperCase()).trim();
  }

  // find subcategory suffix
  let sub = "";
  if (/formal/.test(rest)) sub = "Formal";
  else if (/casual/.test(rest)) sub = "Casual";
  else if (/partywear/.test(rest)) sub = "Partywear";
  else if (/winter/.test(rest)) sub = "Winter";
  else if (/ensem/.test(rest)) sub = "Ensembles";
  else if (/shawl/.test(rest)) sub = "Shawls";
  else if (/dupattas?/.test(rest)) sub = "Dupattas";
  else if (/stitched/.test(rest)) sub = "Stitched";
  else if (/unstitched/.test(rest)) sub = "Unstitched";

  if (!sub) return parent;
  return `${parent} ${sub}`.trim();
};
