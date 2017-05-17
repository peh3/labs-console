/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: rhc-open-innovation-labs@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  }
  else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.ClaimType = factory(
      root.RedHatOpenInnovationLabsConsoleApi.ApiClient
    );
  }
}(this, (ApiClient) => {
  /**
   * The ClaimType model module.
   * @module model/ClaimType
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClaimType</code>.
   * @alias module:model/ClaimType
   * @class
   */
  const exports = function () {
    const _this = this;
  };

  /**
   * Constructs a <code>ClaimType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClaimType} obj Optional instance to populate.
   * @return {module:model/ClaimType} The populated <code>ClaimType</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kind')) {
        obj.kind = ApiClient.convertToType(data.kind, 'String');
      }
      if (data.hasOwnProperty('name_template')) {
        obj.name_template = ApiClient.convertToType(
          data.name_template,
          'String'
        );
      }
    }
    return obj;
  };

  /**
   * @member {module:model/ClaimType.KindEnum} kind
   */
  exports.prototype.kind = undefined;
  /**
   * @member {String} name_template
   */
  exports.prototype.name_template = undefined;

  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "secret"
     * @const
     */
    secret: 'secret',
    /**
     * value: "claim"
     * @const
     */
    claim: 'claim'
  };

  return exports;
}));
