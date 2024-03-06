import { AbilityBuilder, Ability } from '@casl/ability'

export default function defineAbilityFor(user) {
  const { can, rules } = new AbilityBuilder();

  if (user) {
    can('manage', 'all'); 
  } else {
    can('read', 'all') 
  }

  return new Ability(rules);
}