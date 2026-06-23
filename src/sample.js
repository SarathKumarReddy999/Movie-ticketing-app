await Model.updateOne(
  { filterField: value },
  {
    set: {
      updateField: newValue
    }
  }
);