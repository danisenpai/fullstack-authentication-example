import { connect } from 'react-redux';
import initialize from '../src/utils/initialize';
import Layout from '../src/components/Layout';

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2">Authentication with Next.js and JWT</h2>
    <img src="/static/nextjs.jpg" />
    <p>
      A proof of concept app, demonstrating the authentication of Next.js
      application using JWT.
    </p>
  </Layout>
);

Index.getInitialProps = function(ctx: any) {
  initialize(ctx);
};

export default connect(state => state)(Index);
