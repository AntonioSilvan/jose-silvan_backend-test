import { Controller, Get } from '@nestjs/common';

@Controller('mock')
export class MockController {

    @Get()
    stateOfRepositories() {
        return {
            repositories:
                [
                    {
                        id: 1,
                        state: 604,
                    },
                    {
                        id: 2,
                        state: 606,
                    },
                    {
                        id: 3,
                        state: 607
                    }
                ]
        }
    }
}
