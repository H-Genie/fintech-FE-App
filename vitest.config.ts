import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Jest 스타일 글로벌 API 사용 가능
    environment: 'jsdom', // 브라우저 환경을 시뮬레이션
    setupFiles: './src/setupTests.ts', // 테스트 초기화 파일
    coverage: {
      provider: 'v8', // 코드 커버리지
      reporter: ['text', 'json', 'html'], // 커버리지 리포트 형식
    },
  },
});

/**
 * 	1.v8:
	  • 기본적으로 빠르고 정확하며, Node.js 환경에서 가장 적합합니다.
	  • 추가 설정 없이 바로 사용 가능합니다.
	2.istanbul:
	  • 브라우저와 Node.js를 모두 사용하는 환경에 적합합니다.
	  • 다양한 리포트를 생성하고 싶을 때 추천.
	3.custom:
	  • 특별한 요구사항이 있는 경우에만 사용합니다.
 */
