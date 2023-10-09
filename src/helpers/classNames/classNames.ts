type Mods = Record<string, boolean | string>;

// const obj: Mods = {
//   'hovered': false
// }

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
}

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg']) // 'remove-btn hovered selectable pdg'
