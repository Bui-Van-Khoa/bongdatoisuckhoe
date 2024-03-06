import { createCanBoundTo } from '@casl/react';
import buildAbilityFor from '@/common/defineAbility';
import { getUserDetail } from '@/common/getUserDetail';

const user = getUserDetail();
	
const ability = buildAbilityFor(user?.isAdmin);

export const Can = createCanBoundTo(ability);