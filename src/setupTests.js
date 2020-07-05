/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

process.env.WP_API_PATH = "/wp-json/";

fetchMock.enableMocks();
