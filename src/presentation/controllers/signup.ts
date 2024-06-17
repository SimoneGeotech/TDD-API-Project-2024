import { MissingParamError } from '../errors/missing-param-error';
import { HttpResponse, HttpResquest } from '../protocols/http';
import { badRequest } from '../helpers/http-helper';
export class SignUpController {
  handle(httpRequest: HttpResquest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
