import { atom } from 'nanostores';

/**
 * Stores custom rules for the prompt enhancer. Users can edit these rules
 * to change how prompts are processed before sending them to the LLM.
 */
export const promptEnhancerRulesStore = atom<string>('');

