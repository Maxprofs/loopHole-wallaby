import { RemoteServices } from '../src/services/requests/request';
import { LazyRequirer } from '../src/config/lazyRequire';

const [chai, sinon, mocha] = LazyRequirer.loadModule(['chai, sinon, mocha']);
describe('Index -- tests', function() {

  it('should add numbers', function() {
    RemoteServices.fetchFromUrl('http://google.fr')
      .then(x => {
      console.log(x);
      chai.expect(true).to.be.true;
    });
  });

});
