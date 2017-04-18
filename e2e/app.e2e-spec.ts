import { MetabolicPathwayVisualizerPage } from './app.po';

describe('metabolic-pathway-visualizer App', () => {
  let page: MetabolicPathwayVisualizerPage;

  beforeEach(() => {
    page = new MetabolicPathwayVisualizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
