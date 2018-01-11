import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DOtEnv from 'dotenv';

DOtEnv.config({path: '.env.test'});
// require('dotenv').config({ path: '.env.test'});

Enzyme.configure({
    adapter: new Adapter()
});


