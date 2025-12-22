// Helper function to format category name
export const formatCategoryName = (category) => {
  if (!category) return "";

  // Split by capital letters or special words
  const formatted = category
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .replace("stitched", "Stitched")
    .replace("unstitched", "Unstitched")
    .replace("formal", "Formal")
    .replace("casual", "Casual")
    .replace("partywear", "Partywear")
    .replace("winter", "Winter");

  return formatted.trim();
};
