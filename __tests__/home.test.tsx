import Home from '@/app/[locale]/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

describe('Home', () => {
  // eslint-disable-next-line global-require
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const locale = 'en';
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const messages = require(`../src/locales/${locale}.json`);

  useRouter.mockImplementationOnce(() => ({
    query: { locale },
  }));

  /**
   * https://stackoverflow.com/questions/70354172/jest-unit-test-for-component-using-nextjs-and-next-intl
   */
  it('renders a heading', () => {
    render(
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Home />
      </NextIntlClientProvider>,
    );

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
