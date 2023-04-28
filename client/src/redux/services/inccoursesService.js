//Internal Lib Import
import { apiService } from './baseQuery';

export const insCoursesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    insCoursesList: builder.query({
      query: () => ({
        url: 'insCourses/insCoursesList',
        method: 'GET',
      }),
    }),
    insCoursesCreate: builder.mutation({
      query: (postBody) => ({
        url: 'insCourses/insCoursesCreate',
        method: 'POST',
        body: postBody,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiService.util.updateQueryData('insCoursesList', undefined, (draft) => {
              draft.data.push(data.data);
            })
          );
          //dispatch(dashboardService.endpoints.dashboardSummary.initiate());
        } catch {}
      },
    }),

    insCoursesUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `insCourses/insCoursesUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),

      async onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            apiService.util.updateQueryData('insCoursesList', undefined, (draft) => {
              const findIndex = draft.data.findIndex((role) => role.id === id);
              draft.data[findIndex].insCoursesCode = data?.data?.insCoursesCode;
              draft.data[findIndex].insCoursesName = data?.data?.insCoursesName;
              draft.data[findIndex].insCoursesInstructor = data?.data?.insCoursesInstructor;
              draft.data[findIndex].seatsLimit = data?.data?.seatsLimit;
              draft.data[findIndex].registrationDeadline = data?.data?.registrationDeadline;
            })
          );

          //dispatch(dashboardService.endpoints.dashboardSummary.initiate());
        } catch {
          //patchinsCourses.undo();
        }
      },
    }),
    insCoursesDelete: builder.mutation({
      query: (id) => ({
        url: `insCourses/insCoursesDelete/${id}`,
        method: 'DELETE',
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchinsCourses = dispatch(
          apiService.util.updateQueryData('insCoursesList', undefined, (draft) => {
            draft.data = draft.data.filter((role) => role.id !== id);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchinsCourses.undo();
        }
      },
    }),
  }),
});

export const {
  useInsCoursesCreateMutation,
  useInsCoursesListQuery,
  useInsCoursesUpdateMutation,
  useInsCoursesDeleteMutation,
} = insCoursesService;
