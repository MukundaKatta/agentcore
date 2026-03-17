// agentcore — context module
// Build an AI Agent from Scratch — minimal agent loop

export interface ContextOptions {
  name?: string;
  enabled?: boolean;
  maxRetries?: number;
  timeout?: number;
}

export class Context {
  private readonly options: Required<ContextOptions>;
  private initialized = false;
  private data = new Map<string, unknown>();

  constructor(options: ContextOptions = {}) {
    this.options = {
      name: options.name ?? "Context",
      enabled: options.enabled ?? true,
      maxRetries: options.maxRetries ?? 3,
      timeout: options.timeout ?? 30000,
    };
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;
    await this.setup();
    this.initialized = true;
  }

  protected async setup(): Promise<void> {}

  async process(input: unknown): Promise<Record<string, unknown>> {
    if (!this.initialized) await this.initialize();
    const result = await this.execute(input);
    return { status: "success", module: "Context", result };
  }

  protected async execute(data: unknown): Promise<unknown> {
    return { processed: true, input: String(data).slice(0, 100) };
  }

  getStatus(): Record<string, unknown> {
    return { module: "Context", initialized: this.initialized, dataKeys: [...this.data.keys()] };
  }

  reset(): void {
    this.data.clear();
    this.initialized = false;
  }
}
