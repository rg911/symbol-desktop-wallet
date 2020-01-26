/**
 * Copyright 2020 NEM Foundation (https://nem.io)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Component, Vue, Prop} from 'vue-property-decorator'

// internal dependencies
import {ValidationRuleset} from '@/core/validators/ValidationRuleset'

// child components
// @ts-ignore
import ErrorTooltip from '@/components/forms/ErrorTooltip/ErrorTooltip.vue'

@Component({
  components: {
    ErrorTooltip,
  },
})
export class MessageInputTs extends Vue {

  @Prop({
    default: ''
  }) value: string

  /**
   * Validation rules
   * @var {ValidationRuleset}
   */
  public validationRules = ValidationRuleset

/// region computed properties getter/setter
/// end-region computed properties getter/setter
}
